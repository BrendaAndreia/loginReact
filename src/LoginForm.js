import React from 'react';


function LoginForm(){
    return(
       <React.Fragment>
           <label for='username'>Usuário</label>
            <input type='text' id='username' />
            <label for='username'>Senha</label>
            <input type='password' id='password' />
            <input type='submit' value='Entrar' className='submit' />
       </React.Fragment>
            
)}
export default LoginForm