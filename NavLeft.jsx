import React from 'react'
import AdminHome from './AdminHome'
import { Link } from 'react-router-dom'

export default function NavLeft() {
  return (
    <>

<div class="list-group">
  <Link to="/admin-home" class="list-group-item list-group-item-action">Home</Link>
  <Link to="/admin-user" class="list-group-item list-group-item-action">User</Link>
  <Link to="/admin-add-maincategory" class="list-group-item list-group-item-action">Maincategory</Link>


  <Link to="/admin-subcatgory" class="list-group-item list-group-item-action">Subcatgory</Link>
  <Link to="/admin-brand" class="list-group-item list-group-item-action">Brands</Link>
  <Link to="/admin-product" class="list-group-item list-group-item-action">Product</Link>

 
  <Link to="/admin-contact" class="list-group-item list-group-item-action">Contact</Link>
  <Link to="/admin-newslatter" class="list-group-item list-group-item-action">Newslatter</Link>
  <Link to="/admin-checkout" class="list-group-item list-group-item-action">Checkout</Link>

  
</div>
    </>
  )
}
