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
        className: "mx-10 my-5",
        dots: true,
    };

    return (
        <Slider {...settings}>
            <div className='carouselItem carouselItem1' />
            <div className='carouselItem carouselItem2' />
            <div className='carouselItem carouselItem3' />
            <div className='carouselItem carouselItem4' />
        </Slider>
    );
}

export default Carousel;
