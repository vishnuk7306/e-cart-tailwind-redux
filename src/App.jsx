
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* dynamic url  : full colan kandu kazhinja system manasil akkum ath oru dynamic url  */}
          {/* full colon kandu kazhinja athinte thottu porake verunne user koduthekunne data ahnn system thinu manasil akum  */}
          <Route path='/:id/View' element={<View/>}/>
          <Route path='/Wishlist' element={<Wishlist/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Pnf' element={<Pnf/>}/>
        </Routes>  
          
          <Footer/>
    </>
  )
}

export default App
