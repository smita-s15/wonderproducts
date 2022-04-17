import React from 'react'
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };
    return (
        <>
            <Slider {...settings} >
                {new Array(6).fill("").map((item, i) => (
                    <div  style={{ textAlign: 'center' }}>
                        <img src={require(`../../../../ui/assets/Services/label (${i}).png`)} alt="" style={{ display: 'block', margin: '0 auto' }} />
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default Carousel