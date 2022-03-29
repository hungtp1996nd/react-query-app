import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{margin: '40px'}}>
      <h1>Welcome to React Query!</h1>
      <nav style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Link to="/">Home Page</Link>
        <Link to="/traditional">Traditional Request</Link>
        <Link to="/rq">React Query Request</Link>
        <Link to="/rq-parallel">React Query Parallel</Link>
        <Link to="/rq-multi-dynamic">React Query Multi and Dynamic</Link>
      </nav>
    </div>
  )
}

export default Header;
