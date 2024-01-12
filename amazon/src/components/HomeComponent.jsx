import React from 'react'
import Banner1 from '../img/Home page banner 1.jpg'

function HomeComponent() {
  return (
    <div>
        <img style={{width:'100%', height:'400px'}} src={Banner1} alt="" />

        {/* Catogery postion */}
        <h3 style={{ fontSize:'30px', marginTop:'30px', fontFamily: 'League Spartan', textAlign:'center' }} >Categories</h3>
        <div className='Category' style={{width:'100%',display:'flex',justifyContent:'space-between',paddingTop:'10px',paddingBottom:'10px', marginTop:'10px'}}>
          <div style={{width:'20%',backgroundColor:'white', borderRadius:'5px',height:'200px',marginLeft:'5px',border:'1px #BFC7C7 solid', boxShadow:'1px 1px #BFC7C7 '}}>Mobiles</div>
        </div>
        {/* End of Category portion */}

        {/* Product portion */}
        <h3 style={{ fontSize:'30px', marginTop:'30px', fontFamily: 'League Spartan', textAlign:'center' }} >Products</h3>
        <div className='Category' style={{width:'100%',display:'flex',justifyContent:'space-between',paddingTop:'10px',paddingBottom:'10px', marginTop:'10px'}}>
          <div style={{width:'15%',backgroundColor:'white', borderRadius:'5px',height:'200px',marginLeft:'5px',border:'1px #BFC7C7 solid', boxShadow:'1px 1px #BFC7C7 '}}>Mobiles</div>
        </div>
    </div>
  )
}

export default HomeComponent