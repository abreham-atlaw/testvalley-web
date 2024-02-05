import Serializer from "@/common/serializers/serializer";
import Item from "../models/Item";


export default class ItemSerializer extends Serializer<Item, Record<string, any>> {
  deserialize(data: Record<string, any>): Item {
    return {
      uuid: data["uuid"],
      name: data["name"],
      body: data["body"],
      key: data["key"],
      seq: data["seq"],
      publication: {
        id: data["publication"]["id"],
        title: data["publication"]["title"],
        code: data["publication"]["code"],
        productId: data["publication"]["productId"],
        prdType: data["publication"]["prdType"],
        offeringType: data["publication"]["offeringType"],
        rating: data["publication"]["rating"],
        productName: data["publication"]["productName"],
        brandName: data["publication"]["brandName"],
        preface: data["publication"]["preface"],
        prefaceIconUrl: data["publication"]["prefaceIconUrl"],
        tagsOnImage: data["publication"]["tagsOnImage"],
        media: data["publication"]["media"].map((media: any) => ({
          seq: media["seq"],
          type: media["type"],
          uri: media["uri"],
          deviceType: media["deviceType"],
        })),
        isTrial: data["publication"]["isTrial"],
        priceInfo: {
          price: data["publication"]["priceInfo"]["price"],
          discountPrice: data["publication"]["priceInfo"]["discountPrice"],
          discountRate: data["publication"]["priceInfo"]["discountRate"],
        },
        applyCoupon: data["publication"]["applyCoupon"],
      },
    };
  }

  serialize(instance: Item): Record<string, any> {
    throw new Error("Method not implemented.");
  }
}
