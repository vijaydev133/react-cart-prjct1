import React, { useEffect } from "react";
import Nav from "../../assets/Nav/Nav";
import { useContext, useState } from "react";
import { stateContext } from "../../Context/Context";
import products from "../../assets/Products.json";
import "./Cart.scss";

const Cart = () => {
  const { state, dispatch } = useContext(stateContext);
  // const [qty, setQty] = useState(state.qty);

  // useEffect(()=>{

  // },[qty])

  function rmvItem(val) {
    let res = state.CartArr.filter((el) => el !== val);
    dispatch({
      type: "rmvItem",
      payLoad: res,
    });
  }

  function qtyIncmt( id) {
    let resl = state.qty
    
      // console.log(resl);
    resl[id] = resl[id] + 1
    dispatch({
      type : "qtyIncmt",
      payLoad : resl
    })
    
    
    // products.forEach((product) => {
    //   if (id === product.id) {
        // dispatch({
        //   type : "qtyIncmt",
        //   payLoad : {  }
        // })
        // setQty(val)
        // setQty(prev => prev + 1)
    //   }
    // });
    
  }

  function qtyDecmt(id) {
    let resl = state.qty
    // if (resl[id] < 1){
    //   rmvItem(id)
    // }
    // else{
      
      // console.log(resl);
    resl[id] = resl[id] - 1
    if (resl[id] < 1){
      rmvItem(id)
    } else{
      dispatch({
        type : "qtyDecmt",
        payLoad : resl
      })
    }
    
    }
  // }

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
                <span onClick={() => qtyIncmt( product.id)}>+</span>
                <span>{state.qty[product.id]}</span>
                <span onClick={() => qtyDecmt(product.id)}>-</span>
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
