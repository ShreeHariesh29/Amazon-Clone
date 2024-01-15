import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';


function ProductDetails() {
  const [products , setProducts] = useState([]);
  const [categories , setCategories] = useState([]);

  useEffect (()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))

    axios.get('https://fakestoreapi.com/products/categories')
    .then(res => setCategories(res.data))

  },[])
  return (
    <div>
      <div className='Category' style={{width:'100%',display:'flex',justifyContent:'center',paddingTop:'10px',paddingBottom:'10px', marginTop:'10px'}}>
          {categories.map(categories =>(
            <div>
            <button style={{width:'200px',backgroundColor:'white', borderRadius:'5px',height:'50px',marginLeft:'20px',border:'1px #BFC7C7 solid', boxShadow:'1px 1px #BFC7C7 ',textAlign:'center',fontFamily:'sans-serif',cursor:'pointer'}}>{categories}</button>
            </div>
            
          ))}
          
        </div>
        <h3 style={{ fontSize:'30px', marginTop:'30px', fontFamily: 'League Spartan', textAlign:'center' }} >Products</h3>
        <div style={{display:'flex', width:'100vw', flexWrap:'wrap',justifyContent:'center'}}>
        {products.map(products =>(
          <div key={products._id} >
            <div style={{width:'300px',height:'350px', marginLeft:'20px',border:'1px gray solid',marginTop:'20px', borderRadius:'10px', paddingTop:'20px'}}>
              <div style={{justifyContent:'center', width:'100%', display:'flex'}}>
              <img style={{width:'60%', height:'150px'}} src={products.image} alt="" />
              </div>
              <p style={{textAlign:'left',fontFamily:'sans-serif', marginTop:'10px',marginLeft:'10px'}}>{products.title}</p>
              <p style={{textAlign:'end',fontFamily:'sans-serif', marginTop:'10px',marginRight:'10px'}}>Rs: {products.price}</p>
              <div style={{display:'flex', flexWrap:'wrap', overflow:'hidden',height:'90px',width:'80%',scrollbarColor:'blue',fontFamily:'sans-serif', marginTop:'10px',marginLeft:'10px'}}>
              {products.description}
              {/* <p style={{textAlign:'left',fontFamily:'sans-serif', marginTop:'10px',marginLeft:'10px'}}></p> */}
              </div>
              
            </div>
          </div>
          
          // <div  key={products._id} style={{display:'flex', flex:'wrap'}}>
          //   <div className='Category' style={{width:'100%',paddingTop:'10px',paddingBottom:'10px', marginTop:'10px'}}>
          //     <p>{products.id}</p>
          // </div>
          // </div>
        ))}
        </div>
        
    </div>
    
  )
}

export default ProductDetails