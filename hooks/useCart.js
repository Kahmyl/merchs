import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

function useCart() {
    const [cookies, setCookies] = useCookies(["cart"]);
    const [numberOfItems, setNumberOfItems] = useState(0);
    const getCart = () => {
      var cart = cookies.cart;
      if (cart == undefined) {
        console.log("Made cart cookie");
        cart = {};
        setCookies("cart", JSON.stringify(cart));
      }
      console.log("Did not make cookie")
      return cart;
    };

    const addToCart = (productId, action, product) => {
      console.log(productId, action)
      let cart = getCart();
      if (action == "add") {
        if (cart[productId] == undefined) {
            console.log("Add undefinded")
            console.log(product)
          cart[productId] = { quantity: 1, product: product};
        } else {
            console.log("Add definded");
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
      console.log("Cart", cart)
       setCookies("cart", JSON.stringify(cart), { path: '/' });


    };

    const getCartItemsAndTotal = () => {
      let cart = getCart();
      let order = { get_cart_total: 0, get_cart_items: 0 };

      for (let x in cart) {
        console.log(cart[x]);
        order["get_cart_items"] += cart[x]["quantity"];
        let total = cart[x]["product"]["price"] * cart[x]["quantity"]
        console.log(total)
        order["get_cart_total"] += total
      }
      console.log(order["get_cart_total"])
      return order["get_cart_items"];
    };

    useEffect(() => {
      console.log("Calling use effect")
      setNumberOfItems(getCartItemsAndTotal);
    }, [cookies.cart]);

    return { numberOfItems, addToCart };
}


export default useCart;
