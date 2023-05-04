import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <main>
        <h1>404</h1>
        <h2>Oops! You seem to be lost.</h2>
        <p>Here are some Helpful links.</p>
        <Link to="/">Go back Home</Link>
        <Link to="/contact">Contact Us</Link>
    </main>
  )
}

export default ErrorPage