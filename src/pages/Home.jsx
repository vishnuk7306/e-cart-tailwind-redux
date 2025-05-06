import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { featchProducts } from '../redux/slices/productSlice'
const Home = () => {

const dispatch = useDispatch()
const {allProducts,loading,errorMsg} = useSelector(state=>state.productReducers)
console.log(allProducts,loading,errorMsg);

// pagination 
const [currentpage,setCurrentPage] = useState(1)
const productPerPage = 8
// decimalpart rounde cheyyth edukkan vendi ahn ith use cheyyunne
const totalPage = Math.ceil(allProducts?.length/productPerPage)
const currentPageProductLastIndex = currentpage*productPerPage
const currentPageProductFirstIndex = currentPageProductLastIndex - productPerPage
const visibleAllProduct = allProducts.slice(currentPageProductFirstIndex,currentPageProductLastIndex)


useEffect(()=>{
  dispatch(featchProducts())
},[])

const navigateToNextPage =()=>{
  if(currentpage!=totalPage){
    setCurrentPage(currentpage+1)
  }
}

const navigateToPrevPage =()=>{
  if(currentpage!=1){
    setCurrentPage(currentpage-1)
  }
}

  return (
    <>
    {/* props vechh ivide mathra search bar kanicha mathi ennu ezhuthi koduthekkunnu */}
    <Header insideHome = {true}/>
    <div style={{paddingTop:"100px"}} className=' container px-4 mx-auto'>
   {
    loading?
    <div className=' flex justify-center items-center '>
      <img width={'400px'} height={'500px'}  src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="" />
      
    </div>
    :
   <>
      <div className=' grid grid-cols-4 gap-4'>
      {
        allProducts.length > 0 ?
       visibleAllProduct?.map(products=>(
        <div className=' rounded border p-2 shadow'>
        <img width={'100%'} height={'150px'} src= {products?.thumbnail} alt="" />
        <div className=' text-center '>
           <h3 className=' text-xl font-semibold'>{products?.title}</h3> 
           <Link to={`/${products?.id}/View`} className=' bg-violet-600 rounded p-1 mt-2 text-white inline-block'>view more...</Link>
        </div>
   </div>
       ))
        :
        <div className=' flex justify-center items-center text-red-600 font-bold text-lg'>
          products not found
        </div>
      }
   </div>
   <div className=' text-2xl text-center font-semibold mt-20  text-gray-900 '>
    <span onClick={navigateToPrevPage} className=' me-2 cursor-pointer'><i class="fa-solid fa-arrow-left"></i></span>
    <span className=' cursor-default'>{currentpage}/{totalPage}</span>
    <span onClick={navigateToNextPage} className=' ms-2 cursor-pointer'><i class="fa-solid fa-arrow-right"></i></span>
   </div>
   </>
   }
    </div>
    </>
  )
}

export default Home