import BaseState from "@/common/state/baseState";
import Banner from "../../data/models/Banner";
import Shortcut from "../../data/models/Shortcut";
import Collection from "../../data/models/Collection";

export default class ListPageState extends BaseState{

    banners?: Banner[];
    shortcuts?: Shortcut[];
    collections?: Collection[];
    hotCollection?: Collection;
    newCollection?: Collection;
    restCollection?: Collection[];

}