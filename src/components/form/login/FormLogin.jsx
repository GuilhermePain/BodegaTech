import React from 'react'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import imageForm from '../../../assets/img/undraw_shopping_app_flsj.png'
import { Aside, MainContainer, FormContainer, FormContent, FormFields, Inputs, Button } from './FormLoginStyle.js'
import { auth } from '../../../services/firebase.js'


const FormLogin = () => {

  // const inputEmail = useRef()
  // const inputPassword = useRef()

  // const signIn = async (e) => {
  //   e.preventDefault()

  //   const email = inputEmail.current.value
  //   const password = inputPassword.current.value

  //   try {
  //     await auth.createUserWithEmailAndPassword(email, password)
  //   } catch(error) {
  //     console.log("Erro");
  //   }
  // }

  return (
    <MainContainer>
      <Aside>
        <img src={imageForm} alt="Imagem do formulário" />
      </Aside>
      <FormContainer>
        <FormContent>
          <h1>Login</h1>
          <hr />
          <FormFields>
            <label>Nome</label>
            <Inputs type="text" />
          </FormFields>
          <FormFields>
            <label>Senha</label>
            <Inputs type="password" />
          </FormFields>
          <FormFields $primary = "true">
            <input type="checkbox" id="" />
            <label>Mostrar Senha</label>
          </FormFields>
          <Button>Entrar</Button>
          <p>Não tem uma conta? <Link to="/register">Registre-se</Link></p>
        </FormContent>
      </FormContainer>
    </MainContainer>
  )
}

export default FormLogin