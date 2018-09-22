var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  cart.push({"itemName": item, "itemPrice": price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("You shopping cart is empty.");
  } else {
    var arr = [];
    
    for (var i = 0; i < cart.length; i++) {
      var price = Object.keys(cart[i]);
      for (var j in cart[i]) {
        arr.push(`${Object.keys(cart[i])} at $${cart[i][j]}`);
      }
    }
    console.log(`In your cart, you have ${arr.join(", ")}.`);
  }
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
