import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import SignInAs from '../pages/SignInAs'
import AboutUs from '../pages/AboutUs'
import { AuthContextProvider } from '../context/AuthContext'
import ProtectedRoute from './ProtectedRoute'

const Routers = ()=> {
  return  <AuthContextProvider>
    <Routes>
    <Route path="" element={<Navigate to="home"/>}/>
     <Route path='home' element={<Home/>}/>
     <Route path='products' element = {<Products/>}/>
     <Route path='cart' element ={<Cart/>}/>
     <Route path='products/:id' element={<ProductDetails/>}/>
     <Route path='aboutus' element={<AboutUs/>}/>
     <Route path='checkout' 
     element={
     <ProtectedRoute>
        <Checkout/>
     </ProtectedRoute>
    }/>
     <Route path='login' element={<Login/>}/>
     <Route path='Signinas' element={<SignInAs/>}/>
     
  </Routes>
  </AuthContextProvider>
  
};

export default Routers