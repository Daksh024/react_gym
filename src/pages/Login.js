// This is the page where you can login to any account using username and password
import '../stylesheets/Login.css'
import { useState, useEffect } from 'react'

const Login = () => {

    // let [uName, setUname] = useState('')
    // let [passwd, setPasswd] = useState('')

    // useEffect( () => {

    // },
    // []
    // )

    // const sendData = (e) =>{
    //     alert("Login working")
    // }


  return (
    <div className="contentWrapper">
      <div className="container">
        <form>
          <h1>Login</h1>
          <input type="username" placeholder="Username"/>
          <input type="password" placeholder="Password" />
          
          <button>Login</button>
          <div className="__container">
            <a href="/forgotPassword" className='formanchor'>Forgot Password?</a>
            <hr/>
            <a href="/newAccount" className='formanchor'>Create New Account</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login