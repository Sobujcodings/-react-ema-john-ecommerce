// single single product (3 kore dekhabo pashapashi)
import React from 'react';
import Shop from '../shop/Shop';
import './Projuct.css'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // product e akhn 2ta jinish pabo props hesebe karon 2ra props patahaici ai <Product> component tag r vhitore
    const { id, price, ratings, img, name, seller } = props.product;

    // function ta k padhanor karon jatae ekahne shei function ta k use korte pare (na padhale nich theke opore use korte parbo na)
    // 2nd jeta patahaici sheta arekta variable niye nilm
     //ata akta function ai function e onlick e paramtr pathate parbo
    //function ta k short akta nam dilam 
    // ai function take props diye niye ashci jate atake onclick e boshale click korle shop r 
    //fucntion e jeye hit kore r akta kichu sekhane korte pari
    const addtocart = props.Addtocart;
    
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <h6 className='mb-2'>Price: {price}$</h6>
                <p>Manufacture: {seller}</p>
                <p>Ratings: {ratings} Star</p>
            </div>

            {/* function ta k anchi opor theke kintu shei func para/data padhabo ekhan theke */}
            {/* akta parameter diye pathacchi jate ekhane click kkorle kichu ai related data she niye jay sheta 
            shekane recive kore shekane dekahbo */}
            <button onClick={()=>addtocart(props.product)} className='btn btn-primary'>Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;