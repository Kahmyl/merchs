function getCookie(name) {
  //split the cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");

  // loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");

    /* Removing whitespace at the beginning of the cookie name
            and compare it with the given string
            */
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

export const getCart = () => {
  var cart = JSON.parse(getCookie("cart"));

  if (cart == undefined) {
    cart = {};
    console.log("Cart created", cart);
    document.cookie = "cart=" + JSON.stringify(cart) + ";domain=;path=/";
  }
  return cart;
}

export const updateCookieItem = (productId, action) => {
  let cart = getCart();
  if (action == "add") {
    if (cart[productId] == undefined) {
      cart[productId] = { quantity: 1 };
    } else {
      cart[productId]["quantity"] += 1;
    }
  }

  if (action == "remove") {
    cart[productId]["quantity"] -= 1;
    if (cart[productId]["quantity"] <= 0) {
      console.log("remove product");
      delete cart[productId];
    }
  }
  console.log("Cart", cart);
  console.log(getCartItemsAndTotal())
  document.cookie = "cart=" + JSON.stringify(cart) + ";domain=;path=/";
};

export const getCartItemsAndTotal = () => {
  let cart = getCart();
  let items = [];
  let order = { get_cart_total: 0, get_cart_items: 0 };

  for(let x in cart){
    console.log(cart[x])
    order["get_cart_items"] += cart[x]['quantity']
  }
  return order["get_cart_items"]
};
