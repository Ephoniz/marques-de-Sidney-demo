import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../../styles/product_style.scss';
import products from '../../products.js';
import { useGlobalContext } from './context.jsx';
import { BsCheckLg } from 'react-icons/bs';

const Camiseta = () => {
    const {closeSubmenu} = useGlobalContext();
    const { name, price, PrimaryPhotos, info, sizes, colors, size_description } = products[0].unidades[0];

    return (
        <section className='product-page' onMouseOver={closeSubmenu}>
            <div className='clothe-container'>
                <Carousel>
                    <div>
                        <img src='https://litb-cgis.rightinthebox.com/images/640x853/202008/gvmpep1598850753722.jpg' alt='ropa'></img>
                    </div>
                    <div>
                        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/c7beedf40f73439b8b64aaea00f4ec22_9366/Camiseta_primera_equipacion_Espana_Rojo_FR8361.jpg' alt="ropa"></img>
                    </div>
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
                </div>
                <img className='size-description' src={size_description} alt="descripcion de las tallas"></img>
            </div>

        </section>
    );
}

export default Camiseta;
