import React, {useState} from "react";
import "./Login.scss";
import datas from "../../assets/personDetail.json" 
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [pass,setPass] = useState("")
  const [err,setErr] = useState("")

  
  

    function handleUname(event){
        console.log(event.target.value);
        setName(event.target.value)
    }

    function handleUpass(event){
      setPass(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        datas.forEach(data=>{
          if (data.name == name && data.password == pass){
              console.log("data matched");
              navigate("home")
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
            type="password"
             placeholder="password"/>
            <input type="submit" />
            <p>{err}</p>
          </div>
          
        </form>
      </div>
    </div>
  );
}
