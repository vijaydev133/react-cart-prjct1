import React, { useContext } from 'react'
import Nav from '../../assets/Nav/Nav'
import products from "../../assets/Products.json"
import { stateContext } from '../../Context/Context'
import "./Favourite.scss"
const Favourite = () => {
  let {state,dispatch} = useContext(stateContext)

  function rmvBtn(val){
    let res = state.FavArr.filter(el=> el !== val)
    dispatch({
        type : "rmvBtn",
        payLoad : res
    })
  }

  let item = products.map(product=>{
    return(
      state.FavArr.map(fav=>{
        if(product.id === fav){
          return(
            <div key={product.id} className="fav-items">
                 <img src={product.img} alt="" />
                  <p>{product.name}</p>
                  <span onClick={()=>rmvBtn(product.id)} style={{backgroundColor : "red"}}>0</span>
                  
            </div>
          )
        }
      })
    )
  })
  return (
    <div>
      <Nav/>
      Favourite
      <div className="fav-cont">
      {item}
      </div>
     
      </div>
  )
}

export default Favourite