import React, { useEffect, useState } from 'react';
import './shop.css'
import img from '../../images/Madrid_Heathered-Grey_Feature-Float-1380.webp'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


// data file e thakle sheta public folder e ene then fetch korte hobe
// hook e alwys alada shobar bayre main fun r moddhe declare korte hobe jate shobai acces pay (kono func vhitore na)
// shop e 2ta div thakbe,akta div r vhitore products gula thakbe shei products r vhitore thakbe product component

const Shoppingcart = () => {
    // fetch here jekhane dekhabo shekanei fetch korbo
    // products pabo fetch kore
    const [products, setproducts] = useState([])
    const [cart, setCart] = useState([])
    const [productprice, setProductprice] = useState([]);
    // cart r man akhn akta empty array
    //shei array t aro kichu add korte chaile array.push korle cholbe na arekta array baniye(copy kore) sheta t add korte hobe


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])


    // Local storage (get)
    // getting localstorage data (outiside r sathe interact browser/api sheta side effect so useeffect diye ante hobe)
    useEffect(() => {
        // api/direct folder na hole fetch kora lagbe na
        const storedCart = getShoppingCart();
        console.log(storedCart);
    }, [])



    // BTN e click korle ai functin e eshe hit korbe
    // btn click ai func call hole shei pathano product r shob jate usestate r state e rekhe niche use korbo (order summary t)
    function Addtocart(product) {              //from onclick add to cart
        //cart.push(product) X                //empty array notun kichu push evhabe react e hobe new banano arekta then assign to it
        const newCart = [...cart, product];  // ager state r empty cart r sathe product k add kore dilam
        //joto bar click korbo totobar product object ai new cart e add hobe r length barbe
        setCart(newCart);                  //jotobar click hobe toto length barbe shei length kei show korabo items e
        //akhn etake cart state diye access korte parbe


        // Localstorage (data set)
        // btn e click kore kichu korte hole ekhane korbo
        addToDb(product.id);
        // akhn data set hoye ache click kore shekhan theke get kore abar dekhabe hobe UI after refresing
        //data load/get korte hole onno akta jayga theke kori tai sheta useEffect diye korte hobe as like api data
    }


    return (
        <div>
            <div className='shop-container'>
                <div className='products-container'>
                    {
                        products.map(product =>
                            <div>
                                <Product
                                    key={product.id}
                                    //product r cart 2ta component k alada kore dilam shekane kaj hobe jah dekhai
                                    product={product}
                                    Addtocart={Addtocart}
                                ></Product>
                                {/* jate ai Addcart function ta k onclick e use kora jay shekane click ekahne hit */}
                            </div>
                        )
                    }
                </div>
                {/* another side */}
                <div className='shopingCart-container'>
                {/* another component baniye shekhane korbo akkhan theke cart r data ta padhiye dilam click korle pura object jabe */}
                    <div>
                        <Cart cart={cart}></Cart>
                    </div>
                
                </div>
            </div>

        </div>
    );
};

export default Shoppingcart;