import React, { useEffect } from "react";
import Nav from "../../assets/Nav/Nav";
import { useContext, useState } from "react";
import { stateContext } from "../../Context/Context";
import products from "../../assets/Products.json";
import "./Cart.scss";

const Cart = () => {
  const { state, dispatch } = useContext(stateContext);
  const [qty, setQty] = useState(1);

  // useEffect(()=>{

  // },[qty])

  function rmvItem(val) {
    let res = state.CartArr.filter((el) => el !== val);
    dispatch({
      type: "rmvItem",
      payLoad: res,
    });
  }

  function qtyIncmt(val, id) {
    products.forEach((product) => {
      if (id === product.id) {
        product.qty = product.qty + 1;
      }
    });
  }

  function qtyDecmt(val) {
    console.log(typeof val);
    setQty(val - 1);
  }

  let item = products.map((product) => {
    return state.CartArr.map((car) => {
      if (product.id == car) {
        return (
          <div key={product.id} className="cart-items">
            <img src={product.img} alt="" />
            <p>{product.name}</p>
            <div className="cart-options">
              <span onClick={() => rmvItem(product.id)}>(-)</span>
              <div className="cart-qty">
                <span onClick={() => qtyIncmt(product.qty, product.id)}>+</span>
                <span>{qty}</span>
                <span onClick={() => qtyDecmt()}>-</span>
              </div>
            </div>
          </div>
        );
      }
    });
  });

  return (
    <div>
      <Nav />
      Cart
      <div className="cart-cont">{item}</div>
    </div>
  );
};

export default Cart;
