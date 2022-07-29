import React from 'react'
import products from "../../assets/Products.json"
import Nav from '../../assets/Nav/Nav'
import Book from "../../assets/Book/Book"

const Home = () => {
   let item =  products.map(product=>{
       
       return <Book key = {product.id} prod = {product}/>
    })
  return (
    <div>
        <Nav/>
        Books
        <div className='Book-container'>
        {item}
        </div>
        

    </div>
  )
}

export default Home