import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Allproducts() {
    const [products , setProducts] = useState([]);
    const [categories , setCategories] = useState([]);
    const [categoryItem, setCategoryItem] =useState([])
  
    useEffect (()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  
      axios.get('https://fakestoreapi.com/products/categories')
      .then(res => setCategories(res.data))
  
      console.log(products)
  
    },[])
    const allProducts =()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
    }
    
    const getCategoryWiseData = (catItem) => {
       axios.get(`https://fakestoreapi.com/products/category/${catItem}`)
        .then(res =>setCategoryItem(res.data))
        .catch(err => console.log(err))
        setProducts(categoryItem)
        console.log(categoryItem)
    }
  
    const Filterchange  = (catItem)=>{
         getCategoryWiseData(catItem)
        console.log(catItem)
    }
    const particulardata =(productid)=>{
      console.log(productid)
    }
  
    // const Filterchange = (catItem)=>{
    //   const result = products.filter((currentData)=>{
    //     return currentData.category === catItem;
        
    //   })
    //   setProducts(result)
    //   console.log(catItem)
    // }
  return (
    <div>
        <div className='Category' style={{width:'100%',display:'flex',justifyContent:'center',paddingTop:'10px',paddingBottom:'10px', marginTop:'10px'}}>
          <button onClick={()=>allProducts()} style={{width:'200px',backgroundColor:'white', borderRadius:'5px',height:'50px',marginLeft:'20px',border:'1px #BFC7C7 solid', boxShadow:'1px 1px #BFC7C7 ',textAlign:'center',fontFamily:'sans-serif',cursor:'pointer'}} >all</button>
          {categories.map(categories =>(
            <div key={categories._id}>
            <button onClick={()=>Filterchange(categories)} style={{width:'200px',backgroundColor:'white', borderRadius:'5px',height:'50px',marginLeft:'20px',border:'1px #BFC7C7 solid', boxShadow:'1px 1px #BFC7C7 ',textAlign:'center',fontFamily:'sans-serif',cursor:'pointer'}}>{categories}</button>
            </div>
            
          ))}
          
        </div>
        {/* End of Category portion */}

        {/* Product portion */}
        <h3 style={{ fontSize:'30px', marginTop:'30px', fontFamily: 'League Spartan', textAlign:'center' }} >Products</h3>
        <div style={{display:'flex', width:'100vw', flexWrap:'wrap',justifyContent:'center'}}>
        {products.map(products =>(
          <div key={products._id} >
            <div style={{width:'300px',height:'350px', marginLeft:'20px',border:'1px #DCDCDC solid',marginTop:'20px', borderRadius:'10px', paddingTop:'20px',boxShadow:'2px 2px  #DCDCDC  '}}>
              <div style={{justifyContent:'center', width:'100%', display:'flex'}}>
              <img style={{width:'60%', height:'150px'}} src={products.image} alt="" />
              </div>
              <p style={{textAlign:'center',fontFamily:'sans-serif', marginTop:'10px',marginLeft:'10px',fontSize:'20px',fontWeight:'600'}}>{products.title.slice(0,11)}</p>
              <p style={{textAlign:'center',fontFamily:'sans-serif', marginTop:'10px',marginLeft:'10px'}}>{products.title.slice(11)}</p>
              <p style={{textAlign:'end',fontFamily:'sans-serif', marginTop:'10px',marginRight:'10px'}}>Rs: {products.price}</p>
              <div style={{display:'flex', flexWrap:'wrap', overflow:'hidden',height:'90px',width:'80%',scrollbarColor:'blue',fontFamily:'sans-serif', marginTop:'10px',marginLeft:'10px'}}>
              {products.description.slice(0,20)}......
              {/* <p style={{textAlign:'left',fontFamily:'sans-serif', marginTop:'10px',marginLeft:'10px'}}></p> */}
              <div style={{display:'flex',justifyContent:'end', marginRight:'10px'}}>
              {/* <button onClick={()=>particulardata(products)} style={{width:'100px',height:'30px'}}>Detail</button> */}
              <Link to={`/unique product/${products.id}`} > <button onClick={()=>particulardata(products.id)} style={{width:'100px',height:'30px', borderRadius:'5px',border:'1px gray solid'}}>View Details</button> </Link>
              <Link to="/addtocart" > <button  style={{width:'100px',height:'30px', borderRadius:'5px',border:'1px gray solid',backgroundColor:'yellow'}}>Add to cart</button> </Link>
              </div>
              
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

export default Allproducts