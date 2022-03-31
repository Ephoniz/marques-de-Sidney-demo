import React, { useState } from 'react';
import '../../styles/home_style.scss';
import { useGlobalContext } from './context';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

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
                    <div className='text-zone'>
                        <p>SUDADERA</p>
                        <h5>God variety</h5>

                        <Link to="/sudadera/1" className='call-to-action' onMouseEnter={() => setEstilo(true)} onMouseLeave={() => setEstilo(false)}>
                            Detalles
                        </Link>
                    </div>
                </div>
                <div className={`carrusel-preset ${estilo ? "gachapon-front" : "gachapon-back"}`}>
                    <div className='text-zone'>
                        <p>CAMISETA</p>
                        <h5>gachapOn wEy</h5>

                        <Link to="/camiseta" className='call-to-action' onMouseEnter={() => setEstilo(true)} onMouseLeave={() => setEstilo(false)}>
                            Detalles
                        </Link>
                    </div>
                </div>
                <div className={`carrusel-preset ${estilo ? "pin-front" : "pin-back"}`}>
                    <div className='text-zone'>
                        <p>PINES</p>
                        <h5>pEEpopin</h5>

                        <button className='call-to-action' onMouseEnter={() => setEstilo(true)} onMouseLeave={() => setEstilo(false)}>
                            Detalles
                        </button>
                    </div>
                </div>
        </Carousel>
        </section>
    );
}

export default Home;
