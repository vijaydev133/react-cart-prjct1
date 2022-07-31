import logo from './logo.svg';
import './App.css';
import { Login } from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Favourite from './Pages/Favourite/Favourite';
import Detail from './Pages/Detail/Detail';
import {stateContext} from "./Context/Context"
import {useReducer} from "react"
import { Navigate } from 'react-router-dom';

import {Routes,Route} from "react-router-dom"
import { initialState, reducerFunc } from './Context/reducer';
   
function App() {
  const [state,dispatch] = useReducer(reducerFunc,initialState)
  return (
    <stateContext.Provider value = {{state,dispatch}}>
    <div className="App">
     {state?.isAuthenticated  ?
     (<Routes>
     <Route path='/' element = {<Home/>}></Route>
     <Route path='home' element = {<Home/>}></Route>
     <Route path='cart' element = {<Cart/>}></Route>
     <Route path='favourite' element = {<Favourite/>}></Route>
     <Route path='detail/:id' element = {<Detail/>}></Route>
     <Route path='*' element = {<Navigate to = "home"/>}></Route>
    </Routes>
     ):(
     <Routes>
      <Route path='login' element = {<Login/>}></Route>
      <Route path='*' element = {<Navigate to = "login"/>}></Route>
      
     </Routes>)
     }
     

     
    </div>
    </stateContext.Provider>
  );
}

export default App;
