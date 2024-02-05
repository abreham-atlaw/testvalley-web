import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import ListPageState from "../states/MainState";
import UIRepository from "../../data/repositories/UIRepository";
import Collection from "../../data/models/Collection";


export default class ListPageViewModel extends AsyncViewModel<ListPageState>{

    private repository = new UIRepository();
    
    public async onInit(): Promise<void> {
        await super.onInit();
        this.state.banners = await this.repository.getAllBanners();
        this.state.collections = await this.repository.getSingleTileCollections();
        this.state.shortcuts = await this.repository.getAllShortcts();
        this.state.hotCollection = this.state.collections.filter(
            (collection: Collection) => (collection.title === "HOT DEAL")
        )[0]
        this.state.newCollection = this.state.collections.filter(
            (collection: Collection) => (collection.title === "New In")
        )[0];
        this.state.restCollection = this.state.collections.filter(
            (collection: Collection) => !([this.state.hotCollection!.id, this.state.newCollection!.id].includes(collection.id))
        )
    }

}