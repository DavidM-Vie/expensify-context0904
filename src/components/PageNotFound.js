import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p> Looks like you're a little lost? <Link to="/">Go Home</Link></p>
    </div>
  )
}

export default PageNotFound
