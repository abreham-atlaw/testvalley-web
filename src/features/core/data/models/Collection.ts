import Item from "./Item";

export default interface Collection {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    items: Item[];
}
