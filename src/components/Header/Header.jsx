import React, { useRef, useEffect }from 'react';
import './header.css';

import logo from '../../assets/images/eco-logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth'
import { motion } from 'framer-motion';
import userIcon from '../../assets/images/user-icon.png'
import { signOut } from 'firebase/auth';
import  { auth }  from '../../firebase.config';
import { toast } from 'react-toastify';

const nav__links=[
  {
    path:'/',
    display:'Play business'
  },
 
  {
    path:'products',
    display:'Products'
  },
  {
    path:'cart',
    display:'Cart'
  },
  {
    path:'aboutus',
    display:'AboutUs'
  },
 
]


const Header = () => {

  const headerRef = useRef(null);
  const  totalQuantity = useSelector(state => state.cart.totalQuantity);
 const profileActionRef = useRef(null)
  const menuRef = useRef(null);
const navigate = useNavigate();
const {currentUser} = useAuth();

const stickyHeaderFunc = ()=>{
  window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
         headerRef.current.classList.add('sticky__header')
    }else{
      headerRef.current.classList.remove('sticky__header')
    }
  });
};
 
const logout=()=>{
  signOut(auth).then(()=>{
    toast.success('Logged out ');
    navigate('/home');
  }).catch(err=>{
    toast.error(err.message)
})
}
const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions');
  useEffect(() =>{
   stickyHeaderFunc()
   return() => window.removeEventListener('scroll', stickyHeaderFunc)
  });
  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  
   const navigateToCart = () =>{
       navigate('/cart');
   }
   const navigateToSign=()=>{
     navigate('/login')
   }

  
  return <header className='header' ref={headerRef}>
           <div className='container'>
             <div className='row'>
              <div className='nav__wrapper'>
                 <div className='logo'>
                   <img src={logo} alt="logo" />
                   <div>
                    <h5>CRM & Marketing</h5>
                   </div>
                 </div>
                    <div className='navigation' ref={menuRef} onClick={menuToggle}>
                      <ul className="menu">
                        {nav__links.map((item, index) =>(
                            <li className ='nav__item' key={index}>
                            <NavLink 
                            to ={item.path} 
                            className={(navClass)=>
                            navClass.isActive ? 'nav__active':''}>
                              {item.display}</NavLink>
                            </li>
                            ) )}
                      </ul>
                    </div>
                    <div className="nav__icons">
                    <span className='cart__icon' >
                   <i class="ri-shopping-bag-line" onClick ={navigateToCart}></i></span>
                    <span className="badge">
                      {totalQuantity}
                    </span>
                    <div className='profile' onClick={toggleProfileActions}>
                      <motion.img 
                      whileTap={{scale:1.2}} 
                      src ={currentUser ? currentUser.photoURL : userIcon} 
                    alt='' 
                      onClick={toggleProfileActions}/>
                      

                        <div className="profile__actions" onClick={toggleProfileActions}
                        ref={profileActionRef} 
                        >
                          {
                            currentUser ? (
                            <span  onClick={logout}>Logout</span>
                            ) : (
                            <div className='d-flex align-items-center justify-content-center flex-column '>
                              {/*<Link to='/signinas'>SignInAs</Link>*/}
                              <Link to='/login'>Login</Link>

                            </div>
                          )}
                        </div>
                      </div>
                    
                    <div className="nav__icons">
                    <NavLink to="/signinas" >Sign in us</NavLink>
                     
                          
                      <button onClick ={navigateToSign}><NavLink to="/login">Apply now</NavLink></button>
                    </div>
                    {/***mobile**/}
                    <div className='mobile__menu'>
                      <span onClick={menuToggle}>
                      <i class="ri-menu-line"></i>
                      </span>
                    </div>
              </div>
             </div>
           </div>
           </div>
         </header>

}

export default Header