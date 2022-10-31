import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';
import { Button , Form, FormGroup} from 'react-bootstrap';

const Checkout = () => {

   const totalQty =useSelector(state=>state.cart.totalQuantity)
   const totalAmount = useSelector(state=>state.cart.totalAmount)

   return <Helmet title='Checkout'> 
    <section>
       <div className="container">
          <div className="row">
           <div className="col-lg-6">
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              
              <Form  className='billing__form'>
              <div className="row">
               <div className="col-md-6">
                 <FormGroup className=' form__group'>
                <label>username</label>
                 <input type="text" />
                </FormGroup>
                </div>
                <div className="col-md-6">
               <FormGroup className=' form__group'>
               <label> Username</label>
               <input type="text"/>
            </FormGroup>
            </div>
            </div>
            <div className="row">
               <div className="col-md-6">
              <FormGroup className=' form__group'>
              <label> Password</label>
                <input type="password" />
               </FormGroup></div>
               <div className="col-md-6">
                <FormGroup className=' form__group'>
                <label> Re-Enter password</label>
                   <input type="password" />
               </FormGroup></div></div>
               <hr/>
               <div className="row">
               <div className="col-md-6">
              <FormGroup className=' form__group'>
              <label>First name</label>
                <input type="text" />
              </FormGroup></div>
              <div className="col-md-6">
               <FormGroup className=' form__group'>
               <label>Last name</label>
                 <input type="text" />
                </FormGroup></div></div>
                <div className="row">
               <div className="col-md-6">
               <FormGroup className=' form__group'>
               <label>Email</label>
                  <input type="email" />
               </FormGroup></div>
               <div className="col-md-6">
               <FormGroup className=' form__group'>
               <label>Phone-Number</label>
                 <input type="number" />
                 </FormGroup></div></div>
                 <div className="row">
               <div className="col-md-6">
               <FormGroup className=' form__group'>
               <label>Country</label>
                <input type="text" />
               </FormGroup></div>
               <div className="col-md-6">
              <FormGroup className='form__group'>
              <label>Address</label>
                 <input type="text" />
              </FormGroup></div></div>
                <hr/>
            <label>Please include a breif decription of how 
              you plan to use this site.</label>
              <FormGroup className=' form__group'>
                <textarea type="text" placeholder='Comments...'/>
               </FormGroup>

               <button></button> 
            </Form>
            
           </div>

           <div className="col-lg-6">
              <div className="checkout__cart">
               <h4 className='pb-4 text-center'>Imporve your products and 
be a part of this company 
Take your chance.</h4>
               <h6> Total Qty: <span>{totalQty} items</span></h6>
               <h6> Subtotal: <span>{totalAmount}Dt</span></h6>
               <h6> <span> Shipping:<br/>free shipping:  </span><span>0Dt</span></h6>
                <span>0</span>
               <h4>Total Cost: <span>{totalAmount}Dt</span></h4>
               <Button className="buy__btn auth__btn w-100">Place an order</Button>

              </div>
            </div>
         </div>
       </div>
    </section>
   </Helmet>
}

export default Checkout