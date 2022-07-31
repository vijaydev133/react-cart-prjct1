import React, {useContext, useState} from "react";
import "./Login.scss";
import datas from "../../assets/personDetail.json" 
import { useNavigate } from "react-router-dom";
import { stateContext } from "../../Context/Context";

export function Login() {
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [pass,setPass] = useState("")
  const [err,setErr] = useState("")
  const [password,setPassword] = useState("password")

  const {dispatch} = useContext(stateContext)

  
  

    function handleUname(event){
        console.log(event.target.value);
        setName(event.target.value)
    }

    function handleUpass(event){
      setPass(event.target.value)
    }

    function togglePass(){
        if(password == "password"){
          setPassword("text")
        }
        else{
          setPassword("password")
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        datas.forEach(data=>{
          if (data.name == name && data.password == pass){
              console.log("data matched");
              localStorage.setItem("isLoggedIn",true)
              navigate("home")
              dispatch({
                type: "login",
                payLoad : {isAuthenticated : true}
              })
          } else{
            if(pass === ""){
              setErr("")
            }
            else{
              setErr("invalid username or password")
            }
          }
        })
    }

  return (
    <div className="login-container">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="inp">
            <input 
            onChange={handleUname}
            type="text" 
            placeholder="username"/>
            <input 
            onChange={handleUpass}
            type={password}
             placeholder="password"/>
             <span onClick={togglePass} className="showPass">show</span>
            <input type="submit" />
            
            <p>{err}</p>
          </div>
          
        </form>
      </div>
    </div>
  );
}
