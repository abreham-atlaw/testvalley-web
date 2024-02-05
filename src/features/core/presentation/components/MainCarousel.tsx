import React from 'react';
import Banner from '../../data/models/Banner';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';

interface CarouselState{
}

interface CarouselProps{
    banners: Banner[]
}

class MainCarousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
    };
  }

  renderArrow(direction: string, handler: CallableFunction): React.ReactNode{

    return <div className='absolute w-screen flex h-full top-0' style={{ pointerEvents: 'none'}}>
      <div className='w-[960px] mx-auto h-full flex p-5' style={{ pointerEvents: 'none'}}>
        <button className={`rounded-full text-light z-[100] bg-dark bg-opacity-50 w-10 h-10 block flex my-auto ${(direction === "right")?'ml-auto': ''}`} onClick={() => handler()} style={{ pointerEvents: 'auto'}}>
          <i className={`m-auto fa-solid fa-angle-${direction}`}></i>
        </button>
      </div>
    </div>
    
  }

  render() {
    

    return (
      <>
      <div className='hidden md:block'>
      <Carousel
        centerMode={true}
        axis='horizontal' 
        infiniteLoop={true} 
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        centerSlidePercentage={68}
        renderArrowPrev={(handler) => this.renderArrow("left", handler)}
        renderArrowNext={(handler) => this.renderArrow("right", handler)}>
        {this.props.banners.map(
          (banner: Banner, idx: number) => (
            <div className=''>
              <Link to={banner.linkUrl} key={idx} className='w-full flex z-[100]'>
                <div className='w-[960px] mx-auto'>
                  <img src={banner.pcImageUrl} className="w-full mx-auto" />
                </div>
              </Link>
            </div>
          )
        )}
      </Carousel>
      </div>

      <div className='block md:hidden'>
      <Carousel
        axis='horizontal' 
        infiniteLoop={true} 
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        showArrows={false}>
        {this.props.banners.map(
          (banner: Banner, idx: number) => (
            <div className=''>
              <Link to={banner.linkUrl} key={idx} className='w-full flex z-[100]'>
                <div className='w-full mx-auto'>
                  <img src={banner.mobileImageUrl} className="w-full mx-auto" />
                </div>
              </Link>
            </div>
          )
        )}
      </Carousel>
      </div>
      </>
      
    );
  }
}

export default MainCarousel;
