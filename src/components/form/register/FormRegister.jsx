import React from 'react'
import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import imageForm from '../../../assets/img/undraw_shopping_app_flsj.png'
import { Aside, MainContainer, FormContainer, FormContent, FormFields, Inputs, Button } from './FormRegisterStyle.js'
import { auth } from '../../../services/firebase.js'

const FormRegister = () => {

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
          <h1>Registro</h1>
          <hr />
          <FormFields>
            <label>Nome</label>
            <Inputs type="text" />
          </FormFields>
          <FormFields>
            <label>Email</label>
            <Inputs type="email" />
          </FormFields>
          <FormFields>
            <label>Senha</label>
            <Inputs type="password" />
          </FormFields>
          <FormFields>
            <label>Confirmar senha</label>
            <Inputs type="password" />
          </FormFields>
          <FormFields $primary = "true">
            <input type="checkbox" id="" />
            <label>Mostrar Senha</label>
          </FormFields>
          <Button>Registrar</Button>
          <p>Já tem uma conta? <Link to="/login">Entrar</Link></p>
        </FormContent>
      </FormContainer>
    </MainContainer>
  )
}

export default FormRegister