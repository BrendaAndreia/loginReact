import React, {useState} from 'react';

import './App.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import {useSpring, animated} from 'react-spring';
function Login (){
  const [registerFormStatus, setRegisterFormStatus] = useState(false);
  const loginProps = useSpring({
    left: registerFormStatus ? -500 : 0,
   
  })
  const registerProps = useSpring({
    left: registerFormStatus ? 0 : 500,
    
  })
  const loginBtnProps = useSpring({borderBottom: registerFormStatus ? '0px solid transparent' : '2px solid #1059ff'})
  const registerBtnProps = useSpring({borderBottom: registerFormStatus ? '2px solid #1059ff' : '2px solid transparent'})
  function registerCliked(){
    /*alert('Cadastrar Clicado');*/
    setRegisterFormStatus(true);
  }
  function loginCliked(){
    /*alert('Login Clicado');*/
    setRegisterFormStatus(false);
  }

  return (
      <div className="container">
        <div className="login-register-wrapper">
          <div className="navButtons">
          <animated.button id="loginBtn"onClick={loginCliked} style={loginBtnProps}>Login</animated.button>
          <animated.button id="registerBtn" onClick={registerCliked} style={registerBtnProps}>Cadastrar</animated.button>
          </div>
          <div className="formGroup">
           <animated.form action='' id='loginForm' style={loginProps}><LoginForm /></animated.form>
           <animated.form action='' id='registerForm' style={registerProps}><RegisterForm/></animated.form>
          </div>
        
          <animated.div className="forgotPanel" style={loginProps}><a href="#">Esqueceu sua senha? Clique aqui</a></animated.div>
          <animated.div className="forgotPanel registerForLogin" style={registerProps}><a href="#">Já tem cadastro? Faça o login</a></animated.div>
        
        </div>
      </div>
  )
}
export default Login


