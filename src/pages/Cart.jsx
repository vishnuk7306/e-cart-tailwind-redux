import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'
const Cart = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [cartPrice,setCartPrice] = useState(0)
  // nagivate cheyyan vare oru page il ott , oru action cheyyte tanne
  const nagivate = useNavigate()
useEffect(()=>{
  if(userCart?.length>0){
    setCartPrice(userCart.map(item=>item.totalprice).reduce((a,b)=>a+b))
  }
},[userCart])

const handleDecrementQuantity =(products)=>{
    if(products?.quantity>1){
      dispatch(decrementQuantity(products.id))
    }else{
      dispatch(removeCartItem(products.id))
    }
}

const checkout =()=>{
  dispatch(emptyCart())
  alert('order placed sucessfully...')
  nagivate('/')
}

  
  return (
    <>
    <Header/>
    <div style={{paddingTop:"100px"}} className='px-5'>
      {/* grouping cheyyan vendi ahnn react fragment use cheyythe */}
            {
              userCart?.length>0 ?
              <>
              <h2 className='text-5xl font-semibold text-red-700'>cart summary...</h2>
              <div className=' grid grid-cols-3 gap-4 mt-5'>
               <div className=' col-span-2 border rounded p-5 shadow'>
                 <table className=' table-auto w-full'>
                   <thead>
                           <tr>
                             <td className=' font-semibold'>#</td>
                             <td className=' font-semibold'>Name</td>
                             <td className=' font-semibold'>Image</td>
                             <td className=' font-semibold'>Quantity</td>
                             <td className=' font-semibold'>Price</td>
                             <td className=' font-semibold'>...</td>
                           </tr>
                   </thead>
                   <tbody>
                      {
                        userCart?.map((produts,index)=>(
                          <tr>
                        <td>{index+1}</td>
                        <td>{produts?.title}</td>
                        <td><img width={'70px'} height={'70px'} src={produts?.thumbnail}alt="no image" /></td>
                        <td>
                          <div className=' flex'>
                            <button onClick={()=>handleDecrementQuantity(produts)} className=' font-bold '>-</button>
                            <input style={{width:"40px"}} type="text" className=' border rounded p-1 mx-2' value={produts?.quantity} />
                            <button onClick={()=>dispatch(incrementQuantity(produts.id))}>+</button>
                          </div>
                         </td>
                         <td>$ {produts?.totalprice}</td>
                         <td><button onClick={()=>dispatch(removeCartItem(produts?.id))} className=' text-red-600'><i class="fa-solid fa-trash"></i></button></td>
                      </tr>

                        ))
                      }
                   </tbody>
                 </table>
                 <div className=' float-right mt-5 '>
                      <button onClick={()=>dispatch(emptyCart())} className=' bg-red-600 p-1 text-white rounded'>Empty cart</button>
                      <Link to={'/'} className=' bg-blue-600 p-2 rounded ms-3 text-white'>shope more...</Link>
                 </div>
 
               </div>
               <div className=' col-span-1'>
                 <div className=' shadow rounded border p-5'>
                        <h2 className=' font-bold text-2xl'> Total Amount : <span className=' text-red-500 '>$ {cartPrice}</span></h2>
                        <button onClick={checkout}  className=' bg-green-600 rounded p-4 w-full text-white mt-4'>Check out</button>
                 </div>
 
               </div>
 
              </div>
              </>
              :
              <div className=' flex justify-center items-center h-screen'>
               <img className=' w-100 h-1/2' src="https://miro.medium.com/v2/resize:fit:1100/1*D-ZiKd0B00tdifaB2X3tKQ.gif" alt="no images" />
               <h1 className=' text-3xl text-red-600'>your Cart is empty</h1>
               </div>

            }
    </div>
    </>
  )
}

export default Cart




