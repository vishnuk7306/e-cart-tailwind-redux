import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'




const View = () => {
// add to wishlist
const dispatch = useDispatch()
const userWishlist = useSelector(state=>state.WishlistReducer)

// add to cart
 const userCart = useSelector(state=>state.cartReducer)



const [products,setProducts] = useState({})
// url inn verunna data ine fatch cheyyth edukkan ahnn ith use cheyyunne
const {id} = useParams()
console.log(id);
useEffect(()=>{
    if(sessionStorage.getItem('allproducts')){
         const allProducts = JSON.parse(sessionStorage.getItem('allproducts'))
        setProducts(allProducts.find(items=>items.id== id));
         
    }
},[])





// wishlist il ott add akkunnu
const wishlistAdded =()=>{
  const existingList = userWishlist?.find(item=>item?.id==id)
  if(existingList){
    alert("product already in wishlist")
  }else{
    dispatch(addToWishlist(products))
  
  }
}
// function for add to cart
const handleCart=()=>{
  dispatch(addToCart(products))
  const existingProduct = userCart.find(item=>item?.id==id)
  if(existingProduct){
    alert('product quantity incremented')
  }else{
    alert('product add to your cart')
  }
}







  return (
    
    <>
       <Header/>
       <div  className=' flex flex-col mx-5'>
        <div className=' grid grid-cols-2 items-center h-screen'>
              <img className=' ms-40' width={'350px'} height={'250px'} src= {products?.thumbnail} alt="no image" />
              <div>
                <h3 className=' font-bold'>PID : {products?.id} </h3>
                <h2 className=' text-4xl font-bold'>Title: {products?. title}</h2>
                <h4 className=' text-red-600 font-bold text-2xl'> Price: ${products.price}</h4>
                <h4 className=' font-semibold'>Brand: {products?.brand}</h4>
                <h4 className=' font-semibold'>category: {products?.category}</h4>
                <p>
                  <span className=' font-semibold'>Description: {products?.description}</span>
                </p>
                <h3>client reviews</h3>
                {
                  products?.reviews?.length > 0 ?
                  products.reviews?.map(items=>(
                    <div key={items?.date} className=' shadow rounded p-2 mb-2 '>
                        <h5>
                          <span>{items?.reviewerName}</span> : <span>{items?.comment}</span>
                        </h5>
                        <p>Raiting : {items?.rating} <i class="fa-solid fa-star text-yellow-400"></i> </p>
                        
                    </div>
                    
                  ))
                 :
                 <div className=' font-bold text-red-600'>
                  no reviews yet!....
                 </div>
                }
                <div className='flex  mt-5 '>
                        <button onClick={wishlistAdded} className=' text-white bg-red-600 p-2'>Add to wishlist</button>
                        <button onClick={handleCart} className=' text-white bg-green-700 p-2 ms-3'>Add to cart</button>
                </div>
              </div>
           
        </div>
        
            
       </div>
    
    </>
  )
}

export default View