import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:"250px" , marginTop:"120px"}}  className=' flex justify-between items-center bg-violet-600 text-white  '>
      <div style={{width:"400px"}} className=' mt-3 ms-5'>
           <Link className=' text-2xl  font-bold'><i class="fa-solid fa-truck-fast"></i> E CART</Link>
           <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, facilis <br />odit quod corporis excepturi nisi a itaque <br /> harum cumque unde quia porro totam iure voluptatum <br />
            perspiciatis non magnam blanditiis! Ad?
            <span>curentllty v.1.2</span>
           </p>
        </div>
        <div className=' mt-3 '>
          <h3 className=' mb-2 text-2xl  font-bold'>Link</h3>
          <h5><Link to={'/'}>landing page</Link></h5>
          <h5><Link to={'/Wishlist'}>wishlist page</Link></h5>
          <h5><Link to={'/Cart'}>cart page</Link></h5>
        </div>
        <div className=' text-justify mt-3'>
          <h3 className='mb-2 text-2xl  font-bold'>Guide</h3>
          <h5><a href="https://react.dev/">React</a></h5>
          <h5><a href="https://react-bootstrap.netlify.app/">React bootstarp</a></h5>
          <h5><a href="https://reactrouter.com/">React rounter</a></h5>
        </div>
        <div className='mt-3 me-4'>
          <h2 className='text-2xl  font-bold'>contact us</h2>
         <div className=' flex items-center justify-center'>
         <input className=' text-black rounded p-2' type="text" placeholder='enter your email' />
         <i class="fa-solid fa-arrow-right ms-2"></i>
         </div>
         <div className=' flex justify-between mt-2 me-8'>
        <a href=""> <i class="fa-brands fa-instagram text-orange-600"></i></a>
         <a href=""><i class="fa-brands fa-twitter text-blue-400"></i></a>
        <a href=""> <i class="fa-brands fa-facebook text-blue-400"></i></a>
        <a href=""> <i class="fa-brands fa-whatsapp text-green-500"></i></a>
        <a href=""> <i class="fa-brands fa-github text-black"></i></a>
         </div>
       
  
</div>

   </div> 
  
  )
}

export default Footer