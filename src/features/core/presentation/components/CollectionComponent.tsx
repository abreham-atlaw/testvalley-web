import React from "react";
import Collection from "../../data/models/Collection";
import { Carousel } from "react-responsive-carousel";
import ItemComponent from "./ItemComponent";
import Item from "../../data/models/Item";

interface CollectionComponentProps{
    collection: Collection
}

export default class CollectionComponent extends React.Component<CollectionComponentProps>{
    carouselRef = React.createRef<Carousel>();

    handlePrevClick = () => {
        if (this.carouselRef.current) {
            this.carouselRef.current.moveTo(this.carouselRef.current.state.selectedItem - 1);
        }
    };

    handleNextClick = () => {
        if (this.carouselRef.current) {
            this.carouselRef.current.moveTo(this.carouselRef.current.state.selectedItem + 1);
        }
    };

    render(): React.ReactNode {
        return (
            <div className="flex mt-[56px] flex-wrap md:flex-nowrap">
                <div className="w-full md:w-[240px] mr-0 md:mr-[20px] flex flex-col h-auto md:h-[326px]">
                    <h2 className="text-[24px] font-[600]">{this.props.collection.title}</h2>
                    <h3 className="text-[12px] mt-[8px] text-[#999999]">{this.props.collection.subtitle}</h3>

                    <div className="mt-auto text-xl hidden md:block">
                        <button onClick={this.handlePrevClick}><i className="fa-solid fa-angle-left mr-5"></i></button>
                        <button onClick={this.handleNextClick}><i className="fa-solid fa-angle-right"></i></button>
                    </div>

                </div>
                <div className="w-[680px] hidden md:flex">
                    <Carousel
                    ref={this.carouselRef}
                    centerMode={true}
                    centerSlidePercentage={25}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    autoPlay={true}
                    >
                        {
                            (this.props.collection.items.map(
                                (item: Item, idx: number) =>
                                <div className="px-[6px]" key={idx}>
                                    <ItemComponent item={item}/>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                <div className="flex md:hidden flex-wrap mt-[20px]">
                    {
                        (this.props.collection.items.map(
                            (item: Item, idx: number) =>
                            <div className="w-1/2 px-2 mt-5" key={idx}>
                                <ItemComponent item={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
