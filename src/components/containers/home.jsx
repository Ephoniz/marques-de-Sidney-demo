import React, { useState } from 'react';
import '../../styles/home_style.scss';
import { useGlobalContext } from './context';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    const {closeSubmenu} = useGlobalContext();
    const [estilo, setEstilo] = useState();



    return (
        <section className='home' onMouseOver={closeSubmenu} >
         <Carousel 
            showThumbs={false} 
            dynamicHeight={false} 
            infiniteLoop={true} 
            autoPlay={true} 
            interval={4000} 
            renderIndicator={false}
            showStatus={false}
            >
    
                <div className={`carrusel-preset ${estilo ? "god-front" : "god-back"}`}>
                    <button className='call-to-action' onMouseEnter={() => setEstilo(true)} onMouseLeave={() => setEstilo(false)}>
                    detallEs
                    </button>
                </div>
                <div className={`carrusel-preset ${estilo ? "gachapon-front" : "gachapon-back"}`}>
                    <button className='call-to-action'onMouseEnter={() => setEstilo(true)} onMouseLeave={() => setEstilo(false)}>
                    detallEs
                    </button>
                </div>
                <div className={`carrusel-preset ${estilo ? "pin-front" : "pin-back"}`}>
                    <button className='call-to-action' onMouseEnter={() => setEstilo(true)} onMouseLeave={() => setEstilo(false)}>
                    detallEs
                    </button>
                </div>
        </Carousel>
        </section>
    );
}

export default Home;
