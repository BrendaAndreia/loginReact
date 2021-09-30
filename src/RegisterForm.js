import React from 'react';


function RegisterForm(){
    return(
        <React.Fragment>
            <label for='name'>Nome</label>
            <input type='text' id='name' />
            <label for='email'>Email</label>
            <input type='text' id='email' />
            <label for='password'>Senha</label>
            <input type='text' id='password' />
            <label for='password2'>Confirme a Senha</label>
            <input type='text' id='password2' />
            <input type='submit' value='Cadastrar' className='submit' />
      
        </React.Fragment>
            
        

)}
export default RegisterForm