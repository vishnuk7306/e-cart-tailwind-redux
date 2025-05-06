import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'




const Wishlist = () => {
  // wishlist add action and state
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.WishlistReducer)

  // add to cart 
  const userCart = useSelector(state=>state.cartReducer)

  const handleCart =(products)=>{
     dispatch(addToCart(products))
     const existingProduct = userCart.find(items=>items.id==products.id)
     if(existingProduct){
      alert(" product quantity incremented")
     }else{
      alert("product added to cart")
     }
  }



  return (
    <>
       <Header/>
       <div style={{paddingTop:"100px"}} className=' px-5'>
      {
        userWishlist?.length > 0 ?
        <>
        <h2 className=' text-4xl font-semibold text-red-600'>wishlist</h2>
        <div className=' grid grid-cols-4 gap-4'>
        {
          userWishlist?.map(products=>(
            <div  className=' rounded border p-2 shadow'>
            <img width={'100%'} height={'150px'} src={products?.thumbnail} alt="no image" />
            <div className=' text-center '>
               <h3 className=' text-xl font-semibold'>{products?.title}</h3> 
               <div className=' flex justify-evenly mt-2'>
                    <button onClick={()=>dispatch(removeItem(products?.id))} className='text-xl'> <i class="fa-solid fa-heart-circle-xmark text-red-600"></i> </button>
                    <button onClick={()=>dispatch(handleCart(products))} className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>
               </div>
              
            </div>
       </div>
          ))
        }
      </div>
        </>
        :
         <div className=' flex justify-center items-center h-screen'>
          <img className=' w-100 h-1/2' src="https://mytrident.com/cdn/shop/files/empty-cart-3.gif?v=1728580041&width=1500" alt="no images" />
          <h1 className=' text-3xl text-red-600'>your wishlist is empty</h1>
         </div>
         
         
      }
               
       </div>
    </>
  )
}

export default Wishlist