import Request from "@/common/network/Request";
import Collection from "../models/Collection";
import CollectionSerializer from "../serializers/CollectionSerializer";



export class GetCollectionsRequest extends Request<Collection[]>{

    private serializer  = new CollectionSerializer();

    constructor(type: string, viewType: string){
        super({
            url: `collections?type=${type}&viewType=${viewType}`,
            method: "GET",
        })

    }

    deserializeResponse(response: unknown): Collection[] {
        return this.serializer.deserializeMany(response["items"] as Record<string, unknown>[]);
    }

}