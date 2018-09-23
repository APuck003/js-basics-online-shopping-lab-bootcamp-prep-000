var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// function addToCart(item) {
//   var price = Math.floor(Math.random() * 100) + 1;
//   // cart.push({"itemName": item, "itemPrice": price});
//   cart.push({[item]: price});
//   return `${item} has been added to your cart.`;
// }


function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  // var itemObj = {[item]: itemPrice};
  var itemObj = {"itemName": item, "itemPrice": price};
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}



// function viewCart() {
//   if (cart.length === 0) {
//     // console.log("Your shopping cart is empty.");
//     return "Your shopping cart is empty.";
//   } else if (cart.length === 1) {
//     var oneItem = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`;
//     // console.log(oneItem);
//     return oneItem;
//   } else if (cart.length === 2) {
//     var twoItems = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}, and ${Object.keys(cart[1])} at ${Object.values(cart[1])}.`;
//     // console.log(twoItems);
//     return twoItems;
//   } else {
//     var cartArray = [];
    
//     for (var i = 0; i < cart.length - 1; i++) {
//       cartArray.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
//     }
//     var threeOrMore = `In your cart, you have ${cartArray.join(', ')}, and ${Object.keys(cart[cart.length - 1])} at $${Object.values(cart[cart.length - 1])}.`;
//     console.log(threeOrMore);
//   }
// }

// function viewCart() {
//   // write your code here
//   if (cart.length === 0){
//     return 'Your shopping cart is empty.';
//   } else if (cart.length === 1){
//     var oneItem = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
//     return oneItem;
//   } else if (cart.length === 2){
//     var twoItems = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
//     return twoItems;
//   } else {
//     var cartData = [];
//     for (var i = 0; i < cart.length; i++){
//       cartData.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);

//     }
//     // var threePlusItems = `In your cart, you have ${cartData.join(', ')}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`;
//     var threePlusItems = `In your cart, you have ${getCart()[i].itemName}, and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
//     return threePlusItems;
//   }
// }


function viewCart() {
  const l = cart.length;
   if (!l) {
    return "Your shopping cart is empty.";
  }
   const itemsAndPrices = [];
   for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = getCart()[0].itemName;
    let price = getCart()[0].itemPrice;
     itemsAndPrices.push(`${item} at \$${price}`);
  }
   return `In your cart, you have ${itemsAndPrices.join(', ')}.`;
}




function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
