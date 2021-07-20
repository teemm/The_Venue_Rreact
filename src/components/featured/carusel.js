import React from 'react';
import Slider from 'react-slick';
import slideOne from '../../resources/images/slide_one.jpg';
import slideTwo from '../../resources/images/slide_two.jpg';
import slideThree from '../../resources/images/slide_three.jpg';

const Carusel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div 
        className="carrusel_wrapper"
        style={{height: `${window.innerHeight}px`}}>
            <Slider {...settings}>
                <div>
                    <div 
                    style={{backgroundImage: `url(${slideOne})`,
                    height: `${window.innerHeight}px`}} 
                    className="carrusel_image"></div>
                </div>
                <div>
                    <div   
                    style={{backgroundImage: `url(${slideTwo})`,
                    height: `${window.innerHeight}px`}} 
                    className="carrusel_image"></div>
                </div>
                <div>
                    <div 
                    style={{backgroundImage: `url(${slideThree})`,
                    height: `${window.innerHeight}px`}} 
                    className="carrusel_image"></div>
                </div>
            </Slider>
        </div>
    )
}

export default Carusel;