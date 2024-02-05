import Serializer from "../../../../common/serializers/serializer";
import Shortcut from "../models/Shortcut";

export default class ShortcutSerializer extends Serializer<Shortcut, Record<string, any>> {
  deserialize(data: Record<string, any>): Shortcut {
    return {
      id: data["mainShortcutId"],
      title: data["title"],
      sort: data["sort"],
      imageUrl: data["imageUrl"],
      linkUrl: data["linkUrl"],
    };
  }

  serialize(instance: Shortcut): Record<string, any> {
    throw new Error("Method not implemented.");
  }
}
