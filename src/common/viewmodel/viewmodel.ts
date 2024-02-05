import BaseState from "../state/baseState";
import { FunctionalAsyncHandler } from "./asyncViewModel";
import { AsyncState, AsyncStatus } from "../state/asyncState";


export default class ViewModel<S extends BaseState>{

	private stateSetter: CallableFunction;
	public state: S;


	constructor(state: S, stateSetter: CallableFunction){
		this.stateSetter = stateSetter
		this.state = state;
	}

	public async onInit(){
	
	}

	public async initialize(){
		if(this.state.initState.status != AsyncStatus.none){
			return;
		}
		const initHandler = new FunctionalAsyncHandler<BaseState>(
			this,
			async () => {
				await this.onInit()
			},
			undefined,
			undefined,
			undefined,
			() => {
				return this.state.initState as AsyncState
			}
		)
		await initHandler.handle({});
	}

	public setState(state: S){
		this.stateSetter(state)
		this.state = state;
	}

	public updateAfter(callback: CallableFunction){
		callback()
		this.setState(this.state);
	}

	public syncState(){
		this.setState(this.state);
	}

}
