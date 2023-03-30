import React from 'react';
import './Cart.css'

//component jekhan theke padhabo shekane import korbo


const Cart = (props) => {
    console.log(props.cart);
    const carts = props.cart;
    //price directly pawya jabe nah ata array of object loop chaliye pete hobe


    // prottek ta click kora cart r price gulake jog kore dilam
    let totalprice=0;
    let shippingtotal=0;
    let totaltax =0;

    for(const cart of carts){
        //for totaltotalprice
        totalprice = totalprice + cart.price;
        // console.log(totalprice);

        // shipping charge
        shippingtotal = shippingtotal+ cart.shipping;
        // console.log(shippingtotal);
        
        // tax
        totaltax = totaltax + cart.shipping;
        // console.log(totaltax);
    }
    const grandTotal = totalprice + shippingtotal + totaltax ;
    
    
    return (
        <div>
            <div className='shoppingcart-info'>
                <h3 className=' mb-5'>Order Summary</h3>
                {/* <p>Selected Items: {props.cart.length}?{props.cart.length}:{selectedItemsLS}</p> */}
                {/* <p>Selected Items: {props.cart.length?props.cart.length:selectedItemsLS}</p> */}
                <p>Selected Items: {props.cart.length}</p>
                <p>Total Price: {totalprice}</p>
                <p>Total Shipping Charge: {shippingtotal}</p>
                <p>Tax: {totaltax.toFixed(2)}</p>
                <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
            </div>
            <button className='btn btn-danger mt-5 d-block mx-auto'>Clear Cart</button>
            <button className='btn btn-primary mt-2 d-block mx-auto'>Review Order</button>
        </div>

    );
};

export default Cart;