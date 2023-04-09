// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];  // key dile value pabo koyta ache
    if (!quantity) {
        shoppingCart[id] = 1;          // ager kono quantity na thakbe 1 ta add koro
    }
    else {
        const newQuantity = quantity + 1;  // thakle ager tar sathe 1 jog koro
        shoppingCart[id] = newQuantity;    //new quanity ta value hishebe set kore deo
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));  //add korar por set kore deo LS e
}


// Remove cart according to their id
const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];   //jei id diye cllick kora / call kora hobe sheta dlt kore diba
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}


// getting shopping cart if exist in local-storage (just calling the function we can get LS full object)
const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}


// deleting the whole LS 
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}


export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
