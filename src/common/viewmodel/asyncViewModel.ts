import AsyncHandler from "./asyncHandler";
import ViewModel from "./viewmodel";
import { AsyncState } from "../state/asyncState";
import BaseState from "../state/baseState";


export class FunctionalAsyncHandler<S extends BaseState> extends AsyncHandler<unknown, S>{

	private onEventCallback: CallableFunction;

	constructor(
		viewModel: ViewModel<S>,
		onEvent: CallableFunction,
		onError?: CallableFunction,
		onDone?: CallableFunction,
		onLoading?: CallableFunction,
		asyncStateGetter?: CallableFunction
	){
		super(viewModel);
		this.onEventCallback = onEvent.bind(this);
		if(onError != undefined){
			this.onError = onError.bind(this);
 		}
		if(onDone != undefined){
			this.onDone = onDone.bind(this);
		} 
		if(onLoading != undefined){
			this.onLoading = onLoading.bind(this);
		}
		if(asyncStateGetter != undefined){
			this.getAsyncState = asyncStateGetter.bind(this);
		}
	}

	protected async onEvent(_viewModel: ViewModel<S>, _event: any, state: S): Promise<void> {
		return await this.onEventCallback(state);
	}
			
}


export default class AsyncViewModel<S extends BaseState> extends ViewModel<S>{
	
	
	protected async asyncCall(
		onEvent: CallableFunction,
		asyncState?: AsyncState,
		onError?: CallableFunction,
		onDone?: CallableFunction,
		onLoading?: CallableFunction
	){
		let asyncStateGetter;
		if(asyncState != undefined){
			asyncStateGetter = () => {return asyncState}
		}	
		const handler = new FunctionalAsyncHandler<S>(
			this,
			onEvent,
			onError,
			onDone,
			onLoading,
			asyncStateGetter
		);
		await handler.handle(null);
	}


}