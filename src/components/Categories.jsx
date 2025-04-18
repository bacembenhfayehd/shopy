import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div style={{display:'flex', gap:'4px'}}>
      <Link to='/category/women'>women</Link>
      <Link to='/category/men'>men</Link>
      <Link to='/category/kids'>kids</Link>
    </div>
  )
}

export default Categories