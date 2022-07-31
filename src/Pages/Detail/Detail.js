import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../assets/Nav/Nav'
import products from "../../assets/Products.json"
import "./Detail.scss"

const Detail = () => {
    let param = useParams()
 
    let item = products.map(product=>{
        if(param.id === product.id){
            return ( 
                <div key={product.id} className="detail-item">
                    
                     <img src={product.img} alt="" />
                     <h3>{product.name}</h3>
                     <p>{product.desc}</p>
                </div>
            )
                
           
        }
       
    })
  return (
    <div>
        <Nav/>
        <h1>Detail</h1>
        <div className="detail-cont">
        {item}
        </div>
       
    </div>
  )
}

export default Detail