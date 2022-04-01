import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../../styles/product_style.scss';
import products from '../../products.js';
import { useGlobalContext } from './context.jsx';
import { BsCheckLg } from 'react-icons/bs';
import ImageZoom from "react-image-zooom";

const Camiseta = () => {
    const {closeSubmenu} = useGlobalContext();
    const { name, price, PrimaryPhotos, info, sizes, colors, size_description } = products[0].unidades[0];

    return (
        <section className='product-page' onMouseOver={closeSubmenu}>
            <div className='clothe-container'>
                <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false}>
                    {PrimaryPhotos.map((link) => {
                        return <ImageZoom src={link} alt="camiseta" zoom="250"/>;
                    })}
                </Carousel>
            </div>
            <div className='info'>
                <div className='text-info'>
                    <h1>{name}</h1>
                    <h5>{price} €</h5>
                    <div className='sizes-container'>
                        { sizes.map((size) => {
                            return (
                                <label class="coolbox">
                                <input type="radio" name="size" value="P"/>
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
                                <input type="radio" name="color" value="P"/>
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

export default Camiseta;
