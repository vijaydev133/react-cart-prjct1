import React, {useContext, useEffect, useState} from 'react'
import "./Book.scss"
import { stateContext } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'


const Book = (props) => {

    let {state,dispatch} = useContext(stateContext)

    let [bgColor,setBgColor] = useState("")

    let navigate = useNavigate()
    


    useEffect(()=>{
        if(state.FavArr.includes(props.prod.id)){
          setBgColor("red")
        }else{
          setBgColor("white")
        }
    },[])

   
    function addToCart(){
      if(state.CartArr.includes(props.prod.id)){
        
      }
      else{
        dispatch({
          type : "addToCart",
          payLoad : props.prod.id
      })
      }
        
    }

    function addToFav(){
      if(state.FavArr.includes(props.prod.id)){
          
      }else{
        setBgColor("red")
        dispatch({
          type : "addToFav",
          payLoad : props.prod.id
        })
      }
      
    }


  return (
    <div className='book-cont'>
        <img onClick={()=>navigate(`/detail/${props.prod.id}`)} src={props.prod.img} alt="" />
        <p>{props.prod.name}</p>
        <span onClick={addToCart}>+</span>
        <span style={{backgroundColor : bgColor}} onClick={addToFav}>0</span>
    </div>
  )
}

export default Book