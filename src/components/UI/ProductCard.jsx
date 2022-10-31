import React from 'react'
import { useDispatch } from "react-redux"
import {cartActions} from '../../redux/slices/cartSlice'
import {motion} from "framer-motion"
import '../../styles/product-card.css'
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';

const ProductCard = ({item}) => {

     const dispatch = useDispatch()
     const addToCart = () =>{
         dispatch(cartActions.addItem({
          id:item.id,
          productName:item.productName,
          price:item.price,
          imgUrl:item.imgUrl,
      })
      );
      toast.success('Product added successfully');
  };


  return (
    
    <div className="col-lg-3 col-md-3 mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="productImg" />
        </div>
        <div className="p-2 product__info">
        <h3 className="product__name"> <Link to={`/products/${item.id}`} >{item.productName}</Link></h3>
        
        </div>
        <div>
          <span className=' d-block'>Price:
          </span>
          </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2 ">
        
          <span className="prices">
          {item.price}DT
          </span>
          <motion.span className='shopping-cart' whileTap={{scale:1.2}} onClick={addToCart}><i class="ri-shopping-cart-2-line"></i></motion.span>
        </div> 
      </div>
    </div>
  
  )
}

export default ProductCard