import React from 'react'


function Header() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a href="/" className="navbar-brand">BrandTransparency</a>
            </li>
            <li>
                <a href="/contact" className="navbar-brand">Contact</a>
            </li>
            <li>
                <a href="/productDetails" className="navbar-brand">ProductDetails</a>
            </li>
            <li>    
                <a href="/about" className="navbar-brand">About</a>
            </li> 
            
            <li>
              <button onClick="login" className="btn btn-primary" ><a href="/login" className="navbar-brand">login</a></button>
            </li>

        </ul>
        
    </nav>
   
   


    </div>
  );
}

export default Header