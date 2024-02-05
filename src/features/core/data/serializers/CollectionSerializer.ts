import Serializer from "@/common/serializers/serializer";
import Collection from "../models/Collection";
import ItemSerializer from "./ItemSerializer";


export default class CollectionSerializer extends Serializer<Collection, Record<string, any>> {
  private itemSerializer = new ItemSerializer();

  deserialize(data: Record<string, any>): Collection {
    return {
      id: data["id"],
      title: data["title"],
      subtitle: data["subtitle"],
      description: data["description"],
      items: this.itemSerializer.deserializeMany(data["items"]),
    };
  }

  serialize(instance: Collection): Record<string, any> {
    throw new Error("Method not implemented.");
  }
}
