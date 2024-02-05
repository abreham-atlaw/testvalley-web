import React from "react";
import Item from "../../data/models/Item";


interface ItemComponentProps{
    item: Item
}


interface ItemComponentState{

}

export default class ItemComponent extends React.Component<ItemComponentProps, ItemComponentState>{


    render(): React.ReactNode {
        return (
            <div className="text-left">
                <div className="relative">
                    <img src={this.props.item.publication.media[0].uri} className="w-full"></img>
                    {
                        (this.props.item.publication.tagsOnImage[0])?
                        <div className="absolute bg-success text-light bottom-1 left-1 text-[12px] p-1"><i className="fa-solid fa-share"></i>{this.props.item.publication.tagsOnImage[0]}</div>:
                        <></>
                    }

                </div>
                <div className="mt-[4px]  h-[42px] overflow-clip text-left">{this.props.item.publication.title}</div>
                <div className="text-left font-bold text-[18px]  mt-[8px]">
                    <span className="text-danger">{this.props.item.publication.priceInfo.discountRate}%</span>
                    <span className="">{this.props.item.publication.priceInfo.price}</span>
                    <span className="text-[12px] font-normal">원</span>
                </div>
                <div className="flex mt-[8px]">
                    {([
                        {
                            condition: this.props.item.publication.isTrial,
                            text: "무료체험",
                            color: "dark" 
                        },
                ].map( (cd, idx: number) =>
                            (cd)?
                            <span className={`bg-[#fff7f7] text-[10px] text-${cd.color}`} key={idx}>{cd.text}</span>:
                            <></>
                    ))}
                </div>
                {
                    (this.props.item.publication.rating)?
                    <div className="text-left text-[12px] mt-[10px]">
                        <i className="fa-solid fa-star text-[9px]"></i> {this.props.item.publication.rating}
                    </div>:
                    <></>
                }
                {
                    (this.props.item.publication.preface)?
                    <div className="flex mt-[8px]">
                        <div className="border flex text-[12px] mr-auto">
                            <div className="w-[14px] h-[14px] my-auto">
                                <img src={this.props.item.publication.prefaceIconUrl}/>
                            </div>
                            {this.props.item.publication.preface}
                        </div>
                    </div>:
                    <></>
                }
                
            </div>
        )
    }
    
}