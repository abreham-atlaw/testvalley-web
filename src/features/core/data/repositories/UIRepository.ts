import CoreProviders from "@/di/CoreProviders";
import GetAllBannersRequest from "../requests/GetAllBannersRequest";
import { GetAllShortcutsRequest } from "../requests/GetAllShortcutsRequest";
import Collection from "../models/Collection";
import { GetCollectionsRequest } from "../requests/GetCollectionsRequest";
import Banner from "../models/Banner";
import Shortcut from "../models/Shortcut";


export default class UIRepository{

    private networkClient = CoreProviders.provideNetworkClient();

    async getAllBanners(): Promise<Banner[]>{
        return await this.networkClient.execute(new GetAllBannersRequest());
    }

    async getAllShortcts(): Promise<Shortcut[]>{
        return await this.networkClient.execute(new GetAllShortcutsRequest());
    }

    async getSingleTileCollections(dropEmpty: boolean = true): Promise<Collection[]>{
        let collections =  await this.networkClient.execute(new GetCollectionsRequest("SINGLE", "TILE"));
        if(dropEmpty){
            collections = collections.filter(
                (collection: Collection) => (collection.items.length > 0)
            )
        }
        return collections;
    }



}

