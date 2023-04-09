import React from 'react';
import Product from '../Product/Product';
import './Cart.css'

//component jekhan theke padhabo shekane import korbo
// cart mane shopping list e jah jah add korechhi porre kinbo bole

const Cart = (props) => {
    // akta props diyei just {vhitorer man ta boshiye alada kore fela ekhadhik props hole}

    const handleClearAll = props.handleClearAllCart ;

    // jei cart gula localstorage e achhe tar shob details
    const carts = props.cart;


    //price directly pawya jabe nah ata array of object loop chaliye pete hobe
    // jei gulaa aadd to cart  kora hoyeche shob gulake loop kore prottek tar calculation  korb
    // prottek ta click kora cart r price gulake jog kore dilam



    let totalprice=0;
    let shippingtotal=0;
    let totaltax =0;
    // for localStorage quantity
    let quantity = 0;
    for(const product of carts){

        //for totaltotalprice (ager total r sathe next price add hoye new total hoye jabe)
        totalprice = totalprice + product.price * product.quantity;

        // shipping charge
        shippingtotal = shippingtotal + product.shipping;
        
        // tax
        totaltax = totaltax + product.shipping;
        
        quantity = quantity + product.quantity;
    }
    
    const grandTotal = totalprice + shippingtotal + totaltax ;
    


    return (
        <div>
            <div className='shoppingcart-info'>
                <h3 className=' mb-5'>Order Summary</h3>
                {/* <p>Selected Items: {props.cart.length}?{props.cart.length}:{selectedItemsLS}</p> */}
                {/* <p>Selected Items: {props.cart.length?props.cart.length:selectedItemsLS}</p> */}
                <p>Selected Items: {quantity}</p>
                <p>Total Price: {totalprice}</p>
                <p>Total Shipping Charge: {shippingtotal}</p>
                <p>Tax: {totaltax.toFixed(2)}</p>
                <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
            </div>
            
            {/* conditional-rendering  (quantity 0 theke beshi holei clearCart btn ta dekhabo)  */}
            
            {quantity>0 ?  <button onClick={()=>handleClearAll([])} className='btn btn-danger mt-5 d-block mx-auto'>Clear Cart</button> : ''}
            <button className='btn btn-primary mt-2 d-block mx-auto'>Review Order</button>


            {/* {quantity>0 ? 'ok': 'notokay'}  */}
            {/* <button onClick={()=>handleClearAll([])} className='btn btn-danger mt-5 d-block mx-auto'>Clear Cart</button> */}
        </div>

    );
};

export default Cart;