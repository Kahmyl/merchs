import {useEffect} from 'react'
import { useCookies } from "react-cookie";


function useCart() {
  const [cookies, setCookies] = useCookies(["cart"]);
 
  useEffect(() => {
      if(cookies.cart == undefined){
          let cart = {}
          setCookies("cart", JSON.stringify(cart));
      }
  })

  return null
}

export default useCart