import { getNodeText } from "@testing-library/react";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { url } from "../constants";
import "./cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    console.log(productId, "productid");
    dispatch(remove(productId));
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, []);

  // useEffect(()=>{
  //     if(!cartFromLocalStorage){
  //       return <h1>nothing</h1>
  //     }

  // })

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.length === 0 ? (
          <h4 style={{ margin: "2rem" }}>Cart is Empty</h4>
        ) : (
          <ul>
            {products.map((product) => (
              <div key={product.id} className="cartCard">
                <img src={`${url}/uploads/${product.image}`} alt="" />
                <h5>{product.name}</h5>
                <h5>{product.price}</h5>
                <button
                  className="btn"
                  onClick={() => handleRemove(product._id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
