import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <h1>Home Page</h1>
        <Link to="/login">
            Começar
        </Link>
    </>
  ) 
}

export default Home