import React, { useEffect, useState } from 'react';
// import HomeComponent from '../components/HomeComponent'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ParticularProduct( ) {
  const {id} = useParams();
  const [Product, setProduct] = useState([]);

  useEffect (()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => setProduct([res.data]))
    .catch(err => console.log(err))
  },[])
  
  console.log(Product)

  
  
  return (
    <div>
    <div>
    {Product.map(partproduct =>(
      <div>
        <h1 style={{textAlign:'center', fontFamily:'revert-layer',marginBottom:'20px'}}>{partproduct.category.toUpperCase()}</h1>
        <hr />
        <div style={{display:'flex', justifyContent:'center'}}>
          <div style={{width:'50%', height:'50%',margin:'0px 10px 0px 10px',paddingTop:'80px'}}>
            <img style={{width:'400px',height:'400px',marginLeft:'15%'}} src={partproduct.image} alt="" />
          </div>
        <div style={{width:'50%',margin:'0px 10px 0px 10px',marginTop:'30px'}}>
          <h1 style={{textAlign:'center'}}>{partproduct.title}</h1>
          <p style={{textAlign:'start',marginTop:'30px',fontFamily:'revert',fontSize:'20px'}}>{partproduct.description}</p>
          
          <p style={{textAlign:'end',fontWeight:'600',marginRight:'100px'}}><span style={{color:'red'}} >rating:</span> {partproduct.rating.rate}</p>
          <hr style={{marginTop:'20px'}} />
          <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
            <div style={{}}>
            <p style={{color:'gray'}}>MRP:</p>
            <p style={{fontSize:'30px',fontFamily:'revert'}}>{partproduct.price}</p>
            </div>
            <div style={{}}>
            <p style={{color:'gray'}}>In Stock</p>
            <p style={{fontSize:'30px',fontFamily:'revert'}}>{partproduct.rating.count}</p>
            </div>
            <div style={{}}>
            <p style={{color:'gray'}}>MRP:</p>
            <p style={{fontSize:'30px',fontFamily:'revert'}}>{partproduct.rating.count}</p>
            </div>
          </div>
          <div style={{marginTop:'100px',marginLeft:'50px'}}>
          <button style={{width:'150px',height:'40px',borderRadius:'10px',border:'none',backgroundColor:'yellow',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
          <button style={{width:'150px',height:'40px',borderRadius:'10px',border:'none',backgroundColor:'#227442',fontSize:'15px',fontWeight:'600',marginLeft:'10px'}}>Add to Cart</button>
          </div>
          
        </div> 
       </div>
      </div>
      
            
          ))}
      
    </div>

    </div>
   
    
  )
}

export default ParticularProduct