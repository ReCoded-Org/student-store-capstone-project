import * as React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        className: "mx-10 pt-10 pb-2",
        dots: true,
    };

    return (
        <Slider {...settings}>
            <div className='carouselItem carouselItem1 rounded-lg' />
            <div className='carouselItem carouselItem2 rounded-lg' />
            <div className='carouselItem carouselItem3 rounded-lg' />
            <div className='carouselItem carouselItem4 rounded-lg' />
        </Slider>
    );
}

export default Carousel;
