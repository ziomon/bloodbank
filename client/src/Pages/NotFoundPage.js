import { Link } from 'react-router-dom'
import React from 'react'
import "../Assets/_404.css"

function NotFoundPage() {
  return (
    <div className='error404'>
        <span>
            <h1>404</h1>
            <h5>The page you are trying to access is not here</h5>
        </span>
        <h4>Go to <Link to={'/'} >home page </Link></h4>
    </div>
  )
}

export default NotFoundPage