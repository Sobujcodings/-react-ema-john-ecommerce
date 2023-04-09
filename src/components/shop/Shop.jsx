import React, { useEffect, useState } from 'react';
import './shop.css'
import img from '../../images/Madrid_Heathered-Grey_Feature-Float-1380.webp'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';


// data file e thakle sheta public folder e ene then fetch korte hobe
// hook e alwys alada shobar bayre main fun r moddhe declare korte hobe jate shobai acces pay (kono func vhitore na)
// shop e 2ta div thakbe,akta div r vhitore products gula thakbe shei products r vhitore thakbe product component

const Shoppingcart = () => {
    // fetch here jekhane dekhabo shekanei fetch korbo
    // products pabo fetch kore

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart);

    // cart r man akhn akta empty array
    //shei array t aro kichu add korte chaile array.push korle cholbe na arekta array baniye(copy kore) sheta t add korte hobe


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])




    // get
    // 1 ( localStorage local storage theke ene cart e set kore dibo jate refresh korleo theke jay)
    // Local storage (get) (abar refresh korle ata kaj korbe samebhabe stored data cart e padhiye dibe click r moto)
    // getting localstorage data (outiside r sathe interact browser/api sheta side effect so useeffect diye ante hobe)
    // api/direct folder na hole fetch kora lagbe na
    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        //step1: get id (pair r prothom ta)
        for (const id in storedCart) {
            //step2: get the product by using id (Pura database r sathe milliye dekhtechi amr click kora data konta)
            // local storage thaka id r sathe jodi fetch kora(pura database r kono datar id mile kina check korteche)
            const addedProduct = products.find(product => product.id === id);
            
            if (addedProduct) {
                //step3: get the quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step 4: add the added product to the saved cart
                saveCart.push(addedProduct);  // state e push korte na paray alada faka array t push korlam then sheta padhabo
            }
        }
        setCart(saveCart);
    }, [products])

    




    // 2 (SET)
    //(same kaj akta onclick e akta auto (after refresh LS theke niye same jaygay(cart) e padhiye UI t dekhabe )
    // akta notun array banabo jekhane amr addtocart kora product gula thakbe
    // BTN e click korle ai functin e eshe hit korbe
    // btn click ai func call hole shei pathano product r shob jate usestate r state e rekhe niche use korbo (order summary t)
    
    // akta jinish akbar e cart e save korte chaile amon condition dibo
    function Addtocart(product) {                              //from onclick add to cart
                                                              //empty array notun kichu push evhabe react e hobe new banano arekta then assign to it
        let newCart = [];
        
        //match korle shei product return korbe              // mane upore localS theke ene cart e set korecilm sheta click r id sathe mililye dekhbo mille 1 barabo noyto 1 set korbo
        const exists = cart.find(pd => pd.id === product.id);
                                                            // exist na pawya gele set 1 (pawya gele increase quantity 1)
        if(!exists){
            product.quantity = 1;
            newCart= [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
                                                //joto bar click korbo totobar product object ai new cart e add hobe r length barbe
        setCart(newCart);                       //jotobar click hobe toto length barbe shei length kei show korabo items e
        addToDb(product.id);                    // local storage eo update kore dibo
    }
    
    //akhn etake cart state diye access korte parbe
    // ai jinish tai local storage r jonno beshi korte hocche
    // Localstorage (data set)
    // btn e click korle local storage eo ai id diye khuje shetaar quantity bariye update kore dibo
    // pura product na shudhu id ta local r padhabo
    // akhn data set hoye ache click kore shekhan theke get kore abar dekhabe hobe UI after refresing
    //data load/get korte hole onno akta jayga theke kori tai sheta useEffect diye korte hobe as like api data



    // to clear allcart from home page also home page jekhane design kora shekane korte hobe same cart e funct props hishbe padhiye cart gulo show korbo
    // order page theke dlt korar porer kaj ata (same function just ekhan thekeo padhiye dilam)
    const handleClearAllCart = ()=>{
        setCart([]);
        deleteShoppingCart();
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
                                    // ai function e click korle jetay click hobe ai product gulay padhiye dibo uporer func e
                                    product={product}
                                    Addtocart={Addtocart}
                                ></Product>
                                {/* jate ai Addcart function ta k onclick e use kora jay shekane click ekahne hit */}
                            </div>
                        )
                    }
                </div>

                {/* another right side cart*/}
                <div className='shopingCart-container'>
                    {/* another component baniye shekhane korbo akkhan theke cart r data ta padhiye dilam click korle pura object jabe */}
                    <div>
                        {/* product r onclick e functin boshiye shei product gulo alada kore ene abar daner cart e
                        show koranor jonno padhiye dicche shudhu shei guloke jgula onclick hoyeche shei product gula */}
                        
                        <Cart 
                        cart={cart}
                        handleClearAllCart={handleClearAllCart}
                        ></Cart>

                        {/* for stored cart to be calculated(stored in state and LS also) */}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Shoppingcart;