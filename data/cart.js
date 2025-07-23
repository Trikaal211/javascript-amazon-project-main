export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
 cart = [{
    productId: "bc2847e9-5323-403f-b7cf-57fde044a9505",
    quantity:10,
    deliveryOptionId:'2'
},{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1,
     deliveryOptionId:'1'
}];
}


function saveLocal(){
    localStorage.setItem('cart',JSON.stringify(cart))
}
export function addtoCart(productId){
      let matchingItem;
     
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`)

      const quantity = Number(quantitySelector.value);

      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        cart.push({
          productId,
          quantity,
          deliveryOptionId:'1'
        });
      }
      saveLocal();
}
export function removeCart(productId){
    const newCart = [];
    cart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){


            newCart.push(cartItem)
        }
    });
    cart = newCart;
    saveLocal()
}
export function updateDeliveryOption(productId,deliveryOptionId){
   let matchingItem;
     
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      matchingItem.deliveryOptionId =deliveryOptionId;
      saveLocal()
}
