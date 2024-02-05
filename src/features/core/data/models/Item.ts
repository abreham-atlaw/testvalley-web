interface Media {
    seq: number;
    type: string;
    uri: string;
    deviceType: string | null;
}

interface PriceInfo {
    price: number;
    discountPrice: number;
    discountRate: number;
}

interface Publication {
    id: number;
    title: string;
    code: string;
    productId: number;
    prdType: number;
    offeringType: string;
    rating: number;
    productName: string;
    brandName: string;
    media: Media[];
    tagsOnImage: string[];
    isTrial: boolean;
    priceInfo: PriceInfo;
    applyCoupon: boolean;
    preface: string;
    prefaceIconUrl: string;
}

export default interface Item {
    uuid: string;
    name: string;
    body: string | null;
    key: string;
    seq: number;
    publication: Publication;
}
