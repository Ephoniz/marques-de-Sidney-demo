import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ImageZoom from "react-image-zooom";

const Customcarousel = (photos) => {

    return (
        <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
            {photos['photos'].map((link) => {
                return <ImageZoom src={link} alt="sudadera" zoom="250"/>;
            })}
        </Carousel>
    );
}

export default Customcarousel;
