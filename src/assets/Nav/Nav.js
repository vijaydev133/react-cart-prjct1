import React from "react"
import logo from "../../logo.svg"
import { NavLink } from "react-router-dom"
import "./Nav.scss"



export default function Nav(){
    return(
        <nav className="nav-cont">
            <img src={logo} alt="" width={"100px"} />
            <ul>
                <li>
                    <NavLink to = "/home">Home</NavLink>
                </li>
                <li>
                <NavLink to = "/cart">Cart</NavLink>
                </li>
                <li>
                <NavLink to = "/favourite">Favourite</NavLink>
                </li>
            </ul>
        </nav>
    )
}