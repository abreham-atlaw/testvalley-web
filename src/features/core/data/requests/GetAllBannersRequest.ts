import Request from "../../../../common/network/Request";
import Banner from "../models/Banner";
import BannerSerializer from "../serializers/BannerSerializer";


export default class GetAllBannersRequest extends Request<Banner[]>{

    private serializer = new BannerSerializer();

    constructor(){
        super({
            url: "main-banner/all",
            method: "GET"
        })
    }

    deserializeResponse(response: any): Banner[] {
        return this.serializer.deserializeMany(response);
    }

}