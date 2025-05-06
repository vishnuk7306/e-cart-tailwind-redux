import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../redux/slices/productSlice'


const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  // wishlist counter
  const userWishlist = useSelector(state=>state.WishlistReducer)
  // add to cart counter
  const userCart = useSelector(state=>state.cartReducer)
  return (
    <nav className=' flex fixed bg-violet-600 text-white p-5 w-full'>
       <Link className=' text-2xl font-bold' to={'/'}> 
             <i class="fa-solid fa-truck-fast me-2"></i> Daily cart
       </Link>
       <ul className=' flex-1 text-right'>
       {
        insideHome&& <li className=' list-none inline-block px-5'> <input onChange={e=>dispatch(searchProducts(e.target.value.toLowerCase()))}  style={{width:"300px"}} className=' rounded p-2 text-black' type="text"  placeholder='search products here!!'/></li>
       }
       <Link to={'/Wishlist'}>
       <li className=' list-none inline-block px-5'><i class="fa-solid fa-heart text-red-500 me-2"></i>Wishlist
       <span className='bg-black text-white rounded p-1 ms-1'>{userWishlist?.length}</span></li>
       </Link>
         <Link to={'/Cart'}>
         <li className=' list-none inline-block px-5'><i class="fa-solid fa-cart-plus text-green-400 me-2"></i>Cart
        <span className='bg-black text-white rounded p-1 ms-1'>{userCart?.length}</span></li>
         </Link>
       
        
       </ul>
    </nav>
  )
}

export default Header