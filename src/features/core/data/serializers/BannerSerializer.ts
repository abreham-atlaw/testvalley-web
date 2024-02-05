import Serializer from "../../../../common/serializers/serializer";
import Banner from "../models/Banner";

export default class BannerSerializer extends Serializer<Banner, Record<string, unknown>> {
  deserialize(data: Record<string, any>): Banner {
    return {
      id: data["mainBannerId"],
      title: data["title"],
      sort: data["sort"],
      pcImageUrl: data["pcImageUrl"],
      mobileImageUrl: data["mobileImageUrl"],
      linkUrl: data["linkUrl"],
      startDate: new Date(data["startDate"]),
      endDate: new Date(data["endDate"])
    }
  }

  serialize(): Record<string, unknown> {
    throw new Error("Method not implemented.");
  }
}
