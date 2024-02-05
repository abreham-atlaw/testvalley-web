import ViewModelView from "@/common/components/views/ViewModelView";
import MainViewModel from "../../application/viewModels/MainViewModel";
import MainState from "../../application/states/MainState";
import { ReactNode } from "react";
import Header from "../components/Header";
import MainCarousel from "../components/MainCarousel";
import Shortcuts from "../components/Shortcuts";
import CollectionComponent from "../components/CollectionComponent";
import Collection from "../../data/models/Collection";


export class MainView extends ViewModelView<MainViewModel, unknown, MainState>{
    
    onCreateViewModel(state: MainState): MainViewModel {
        return new MainViewModel(state, this.setState.bind(this));
    }
    onCreateState(): MainState {
        return new MainState();
    }

    onCreateMain(): ReactNode {
        return (<>
            <div className="">
                <Header></Header>

                <main className="pt-0 md:pt-[72px]">

                    <MainCarousel banners={this.state.banners!}/>

                    <div className="mt-10 px-[20px] md:w-[960px] mx-auto">
                        <Shortcuts shortcuts={this.state.shortcuts!}/> 
                        <CollectionComponent collection={this.state.hotCollection!}/> 
                        <CollectionComponent collection={this.state.newCollection!}/>
                        {
                            this.state.restCollection!.map(
                                (collection: Collection, idx: number) => <CollectionComponent collection={collection} key={idx}/>  
                            )
                        } 
                    </div>

                </main>


            </div>

        
        
        </>)
    }

}