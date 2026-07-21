import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
     
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar mySlider-light mySlider sticky-top text-light" style={{background:'#718355'}}>
	    <div className="container">
	      <Link className="navbar-brand text-light" to="/">Eshopper</Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><Link to="/" className="nav-link  text-light">Home</Link></li>
	          <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog</Link>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
              	<Link className="dropdown-item " to="/shop">Shop</Link>
                <Link className="dropdown-item" to="/product-single">Single Product</Link>
                <Link className="dropdown-item" to="/cart">cart</Link>
                <Link className="dropdown-item" to="/checkout">Checkout</Link>
              </div>
            </li>
	          <li className="nav-item"><Link to="/about" class="nav-link text-light">About</Link></li>
	          <li className="nav-item"><Link to="/blog" className="nav-link  text-light">Blog</Link></li>
	          <li className="nav-item"><Link to="/contact" className="nav-link text-light">Contact</Link></li>
			  <li className="nav-item"><Link to="/adminhome" className="nav-link text-light">Admin</Link></li>

	          <li className="nav-item cta cta-colored"><Link to="/cart" className="nav-link  text-light"><span className="icon-shopping_cart"></span>cart[0]</Link></li>

	        </ul>
	      </div>
	    </div>
	  </nav>
    
    </>
  )
}
