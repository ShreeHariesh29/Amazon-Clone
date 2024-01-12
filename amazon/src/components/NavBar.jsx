import React from 'react'
import { Link } from 'react-router-dom'
import  Logo  from '../img/Online_mart-removebg-preview.png'

import addtocart from '../img/6445100.png'


function NavBar() {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
            <img style={{width:'100px', height:'100px', marginLeft:'5%'}} src={Logo} alt="Logo" />
        <div style={{ width:'100%',marginTop:'5px'}}>
        <nav style={{ width:'100%', marginTop:'30px' }}>
            <ul style={{ display:'flex', justifyContent:'center'}}>
                <Link to="/"  style={{textDecoration:'none', listStyle:'none', color:'black',padding:'10px'}}> Home </Link>
                <Link to="/products" style={{textDecoration:'none', listStyle:'none', color:'black',padding:'10px'}}> Products </Link>
                <Link to="/addtocart" style={{textDecoration:'none', listStyle:'none', color:'black',padding:'10px'}}> Add to Cart </Link>
                <Link to="/products" style={{textDecoration:'none', listStyle:'none', color:'black',padding:'10px'}}> Products </Link>
            </ul>
        </nav>
        </div>
        <Link to="/addtocart" style={{ marginRight:'5%', marginTop:'10px'}}><img style={{width:'40px', height:'40px', marginRight:'5%', marginTop:'20px'}} src={addtocart} alt="" />
</Link>
        
    </div>
  )
}

export default NavBar