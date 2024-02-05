import Request from "../../../../common/network/Request";
import Shortcut from "../models/Shortcut";
import ShortcutSerializer from "../serializers/ShortcutSerializer";



export class GetAllShortcutsRequest extends Request<Shortcut[]>{

    private serializer = new ShortcutSerializer();

    constructor(){
        super({
            url: "main-shortcut/all",
            method: "GET"
        })
    }

    deserializeResponse(response: unknown): Shortcut[] {
        return this.serializer.deserializeMany(response as Record<string, unknown>[]);
    }

}