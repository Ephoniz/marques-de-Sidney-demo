import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../../styles/product_style.scss';
import products from '../../products.js';
import { useGlobalContext } from './context.jsx';
import { BsCheckLg } from 'react-icons/bs';
import ImageZoom from "react-image-zooom";

const Pines = () => {
    const {closeSubmenu} = useGlobalContext();
    const { name, price, photos, info, pines } = products[3].unidades[0];
    console.log(photos);

    return (
        <section className='product-page' onMouseOver={closeSubmenu}>
            <div className='clothe-container'>
                <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false}>
                    {photos.map((link) => {
                        return <ImageZoom src={link} alt="camiseta" zoom="250"/>;
                    })}
                </Carousel>
            </div>
            <div className='info'>
                <div className='text-info'>
                    <h1>{name}</h1>
                    <h5>{price} €</h5>
                    <div className='pines-container'>
                        <div className='row'>
                            <label class="coolbox gold">
                                <input type="radio" name="size" value="P"/>
                                    <span >PeepoClown</span>
                            </label>
                            <label class="coolbox">
                                <input type="radio" name="size" value="P"/>
                                    <span>PeepoHappy</span>
                            </label>
                            <label class="coolbox">
                                <input type="radio" name="size" value="P"/>
                                    <span>PeepoShy</span>
                            </label>
                        </div>
                        <div className='row'>
                            <label class="coolbox">
                                <input type="radio" name="size" value="P"/>
                                    <span>EZ</span>
                            </label>
                            <label class="coolbox">
                                <input type="radio" name="size" value="P"/>
                                    <span>Prayge</span>
                            </label>
                            <label class="coolbox">
                                <input type="radio" name="size" value="P"/>
                                    <span>Bedge</span>
                            </label>
                        </div>
                        <div className='row'>
                            <label class="coolbox">
                                <input type="radio" name="size" value="P"/>
                                    <span>PeepoSad</span>
                            </label>
                            <label class="coolbox">
                                <input type="radio" name="size" value="P"/>
                                    <span>PepegaCredit</span>
                            </label>
                            <label class="coolbox">
                                <input type="radio" name="size" value="P"/>
                                    <span>PeepoRiot</span>
                            </label>
                        </div>
                    </div>
                    <div className='informacion'>
                        <p>{info}</p>
                    </div>
                    <button className='btn-comprar'>Comprar</button>
                </div>
            </div>

        </section>
    );
}

export default Pines;
