import React from 'react';
import products  from '../../products';
import '../../styles/products_style.scss';
import { Link } from 'react-router-dom';

const Sudaderas = () => {
    const sudaderas = products.filter((product) => product.modelo === 'sudadera');

    return (
        <div className='sudaderas-container'>
            <h1 className='title'>Sudaderas</h1>
            <div className='sudaderas-cards'>
            {
                sudaderas.map((sudadera, index) => {
                    const { name, white, id } = sudadera.unidades[0];

                    return(
                        <div className='product-card' key={`${name}-${index}`}>
                        <Link to={`/sudadera/${id}`}>
                            <h3>{name}</h3>
                            <img src={white[0]} alt="foto"/>
                        </Link>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
}

export default Sudaderas;
