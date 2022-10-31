import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import { motion } from 'framer-motion'
import {cartActions} from '../redux/slices/cartSlice'
import { useSelector, useDispatch} from 'react-redux'
import {Link, Navigate, NavLink} from 'react-router-dom'


const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector (state=>state.cart.totalAmount);
  return <>
  <Helmet title={'Cart'}>
  <section>
   <div className="container">
    <div className="row">
      <div className="col-lg-9">
        {
          cartItems.length===0 ? (
          <h2 className='fs-4 text-center'> No items added to the cart</h2>
        ):(

        <table className='table bordered'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            {
              cartItems.map((item, index)=>(
             <Tr item={item} key={index} />
              )
              )
            }

          </tbody>
        </table>
        )}
      </div>
      <div className="col-lg-3">
          <div>
            <h6 className='d-flex align-items-center justify-content-between'>Subtotal
            <span className='fs-4 fw-bold'>{totalAmount} Dt</span>
            </h6>
          </div>

          <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
           <div>

           <button className="buy__btn w-100 ">
              <NavLink to="/checkout">Checkout</NavLink>
            </button>

            <button className="buy__btn w-100 mt-3">
              <Link to='/products'>Continue shopping</Link>
            </button>

           </div>
      </div>
    </div>
   </div>
  </section>
  </Helmet>
  </>
};
const Tr = ({item}) =>{
 const dispatch = useDispatch()
 const deleteProduct = () =>{
   dispatch(cartActions.deleteItem(item.id))
 }

  return    <tr>
  <td> <img src={item.imgUrl} alt="" /></td>
  <td>{item.productName}</td>
  <td>{item.price}</td>
  <td>{item.quantity}px</td>
  <td>
    <motion.i  whileTap={{scale:1.2}} 
    onClick = {deleteProduct}
    className="ri-delete-bin-line"></motion.i>
    </td>
</tr>
}

export default Cart