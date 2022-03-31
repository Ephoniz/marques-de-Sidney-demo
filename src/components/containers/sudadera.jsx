import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../../styles/product_style.scss';
import products from '../../products.js';
import { useGlobalContext } from './context.jsx';
import { BsCheckLg } from 'react-icons/bs';
import ImageZoom from "react-image-zooom";
import { useParams } from 'react-router-dom';
import CustomCarousel from './customCarousel.jsx'

const Sudadera = () => {
    const { id } = useParams();
    const sudadera = products[id].unidades[0];
    const {closeSubmenu} = useGlobalContext();
    const { name, 
        price, 
        white,
        blue,
        pink,
        nude,
        info, 
        sizes, 
        colors, 
        size_description } = sudadera;
    
    const [color, setColor] = useState("white");

    const changeColor = (e) => {
        setColor(e.target.value);
    }

    return (
        <section className='product-page' onMouseOver={closeSubmenu}>
            <div className='clothe-container'>
                {color === 'white' && <CustomCarousel photos={white}></CustomCarousel>}
                {color === 'blue' && <CustomCarousel photos={blue}></CustomCarousel>} 
                {color === 'pink' && <CustomCarousel photos={pink}></CustomCarousel>}
                {color === 'nude' && <CustomCarousel photos={nude}></CustomCarousel>}
                {color === 'black' && <CustomCarousel photos={sudadera['black']}></CustomCarousel>}
            </div>
            <div className='info'>
                <div className='text-info'>
                    <h1>{name}</h1>
                    <h5>{price} €</h5>
                    <div className='sizes-container'>
                        { sizes.map((size) => {
                            return (
                                <label class="coolbox">
                                <input type="radio" name="size" value={size}/>
                                    <span>{size}</span>
                                </label>
                                );
                            })
                        }
                    </div>
                    <div className='colors-container'>
                        { colors.map((color) => {
                            return (
                                <label class={`coolbox ${color}`}>
                                <input type="radio" name="color" value={color} onClick={(e) => changeColor(e)}/>
                                <BsCheckLg/>
                                </label>
                                );
                            })
                        }
                        
                    </div>
                    <p>{info}</p>
                    <button className='btn-comprar'>Comprar</button>
                </div>
                <img className='size-description' src={size_description} alt="descripcion de las tallas"></img>
            </div>

        </section>
    );
}

export default Sudadera;
