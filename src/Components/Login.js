import React from 'react';
import {useDispatcher} from 'react-redux';
import {login, logout} from "../features/user";


function Login() {
  return (
    <div>
        <button onClick={()=> {dispatch(login({value: {name:"", age:0, email:""}}));}}>
             Login
        </button>

        <button onClick={()=> {dispatch(logout());}}>Logout</button>
    </div>
  )
}

export default Login