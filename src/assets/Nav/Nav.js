import React from "react"
import logo from "../../logo.svg"
import { NavLink } from "react-router-dom"
import "./Nav.scss"
import { stateContext } from "../../Context/Context"
import {useContext} from "react"



export default function Nav(){

    const {state,dispatch} = useContext(stateContext)
  function logout(){
    localStorage.setItem("isLoggedIn",false)
      dispatch({
        type : "logout",
        payLoad : { isAuthenticated : false}
      })
  }

    return(
        <nav className="nav-cont">
            <img src={logo} alt="" width={"100px"} />
            <ul>
                <li>
                    <NavLink to = "/home" style={({isActive})=>isActive? {color : "red"} : null}>Home</NavLink>
                </li>
                <li>
                <NavLink to = "/cart" style={({isActive})=>isActive? {color : "red"} : null}>Cart</NavLink>
                </li>
                <li>
                <NavLink to = "/favourite" style={({isActive})=>isActive? {color : "red"} : null}>Favourite</NavLink>
                </li>
                <li>
                <NavLink  style={({isActive})=>isActive? {color : "red"} : null} onClick={()=>logout()} to = "/">Logout</NavLink>
                </li>
            </ul>
        </nav>
    )
}