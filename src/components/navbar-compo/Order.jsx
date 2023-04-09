import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import './Order.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Order = () => {
    // custom loader diye localstorage r shob data quantity shoho ei compo t niye ashlam akhn eekhane shob dekhate parbo
    // amdr uddessho holo cart r product gulo amra ekhane pathabo via custom loader
    // jeta loader return korabe sheta ekhane recive kore cart e padhiye dilei kajz
    // same cart er datai jehetu dekhaite hobe tai tai ekhane localstorage useeffect,state oituku theke eneo dekhaaiya
    // bosaiya dite pari ba akta custom loader banate pari

    const Savedcart = useLoaderData();

    // initally local e save kora cart gulokei dekhabo,click korle(remove) shei cart state k update kore dibo
    const [cart,setCart] = useState(Savedcart) 



    // amr id match kore remain product gula pete hobe shei ramain product gula cart e padhiye shei gula show korabo
    // remove kora mane filter kore sheta bad diye bakigula k dekhano

    // cart(saved cart) k use kore id diye match kore baki product gulo cart compo t padhiye dile calcu hoye jabe
    // pura stored cart gula k filter kore jei id match na korbe shegula niye cart state update kore dibo
    // product mane cart r vhitore j single product gula ache shegulo
    const handleRemoveCart = (id)=>{
        const remaining = cart.filter(product=>product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    // ekhane ramaining holo product gula
    //remaining id gula k cart e padhiye dilam jate shei cart gula cart compo te padhiye dile new UI dekha jay remove id bad e        
    // local storage thekeo remove kore dilam ai func e padhiye jate refresh r por update ta dekhay



    //2) remove cart 
    // click korle filter kore bakiguloke state e set korbo shei product gulake dekhabo 
    // const handleRemoveCart = (id)=>{
    //     console.log('clicked-id',id);
    //     const storedData = getShoppingCart();
    //     console.log(storedData);
    //     for(const singleID in storedData){
    //         console.log(singleID);

    //     }
        // const remaining = storedData.filter(dbid=>dbid === id);
    // console.log(remaining);}




    // onclick e empty array padhaici jetake iterate kore r kono product pabe na tokthon kichui r dekhabe na
    // remove-all-cart-btn-funtion
    // onno cart r function r sathe connect korte hole props drilling korte hobe (mane marbo ekhane lash porbe shoshane)
    const handleClearAllCart = (value)=>{
        console.log(value);
        setCart(value);
        // setCart([]);
        deleteShoppingCart();
        // ata akta function tai () dite hobe
    }




    return (
        <div className='shop-container '>
            <div className=''>
                {/* jegula ai session e add korchi/joto gula id match korche */}

                <h3 className='text-center'>Customdata Number : {cart.length} </h3>

                <div>
                    {
                        cart.map(singlecart => (
                            <div className='border border-black pe-5 mt-4 w-50 h-50 rounded  bg-white mx-auto d-flex'>
                                <img className='w-25 h-25 m-2 ' src={singlecart.img} alt="" />

                                <div className=' d-flex justify-between w-100'>
                                    <div className='my-auto w-100'>
                                        <h4>{singlecart.name.slice(0, 10)}</h4>
                                        <p>Price: {singlecart.price}</p>
                                        <p>Quantity:{singlecart.quantity}</p>
                                    </div>

                                    <button onClick={()=>handleRemoveCart(singlecart.id)} className=' remove my-auto ms-5'>
                                        <FontAwesomeIcon className='icon' icon={faTrashAlt} />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>



            {/* order r cart(right-side) akta cart kei 2 jaygay use korechi just jah jah lagbe ta dite padhiye deo */}
            <div className='shopingCart-container'>
                {/* faka array dile faka takei loop korbe onno arekta component  amr ekhane use korte parbo tobe props dite hobe noyto not iterable bolbe */}
                {/* ai product jgula local e ache shegula cart compo t padhalei shekahna thekei shob style structure kore ache
                eivhabe ak cart 2 jaygay share hoye jabe */}
                {/* jegula localstorage stored ache mane cart segulo padhiye dilm for calculation */}
                
                {
                    <Cart 
                    cart={cart}
                    handleClearAllCart={handleClearAllCart}
                    ></Cart>
                }

                {/* mane cart shob ready kore quantity set kkore akhn cart e padhiye dile cart ager motoi calculation kore 
                aanswer  diyye dibe mane aakta cart compoonent amra loader use kkore share korlam */}

            </div>

        </div>


    );
};

export default Order;