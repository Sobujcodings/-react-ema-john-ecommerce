import { getShoppingCart } from "../../utilities/fakedb";

const CustomCartLoader = async () => {
    const loadproducts = await fetch('products.json');
    const product = await loadproducts.json();


    // if cart data is in database/local storage we have to use async wait means we karon 
    // local storage e jinish gula ache skhean theke ene kon kon cart gula add kora hoice ta dekhate pari


    // getshopping cart will give you the total localstorage object and we gonna match that id with whole data id
    const storedCart = getShoppingCart();
    const savedCart = [];
                                                      // loop kore prottek id sathe whole datar id match kore jgulo match shegulo nibo
    for (const id in storedCart) {
                                                    // whole product r prottek tar id sathe localstorage id check korbo pele nibo 
        const addedproduct = product.find(prod => prod.id === id);
        if (addedproduct) {
                                                  // match korle shei locals r id diye tar value/quantity ta k amra nibo then shetakei retrn korrabo
            const quantity = storedCart[id]
            addedproduct.quantity = quantity;   // shei localstorage r quantity k addedprodduct r quaantity te set kore dilam
            savedCart.push(addedproduct);

            // addedproduct e shei product gulai jabe jei product er id gula match korche
            // tadr quantity name e arekta property set kore dilam local r quantity diye
            // console.log(savedCart);
        }
    }

    // quantity add kora shoho cart ta k return kore dilam
    return savedCart;

}



// akhn amr localstorage e thaka pura object tai quantity soho peye gelam shetai amra akhn order e dekhaabo
// return korte hobe

export default CustomCartLoader;