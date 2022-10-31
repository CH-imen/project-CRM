import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Helmet from "../components/Helmet/Helmet";
import heroImg from '../Images/img-header.png';
import price from '../Images/price.png';
import delivery from '../Images/delivery.png';
import task from '../Images/task.png';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';
import '../styles/home.css';
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'
import {motion} from "framer-motion"
const Home = ()=> {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  
  useEffect(()=>{
    const filteredTrendingProducts = products.filter(
    (item)=>item.category==='clothes');
    
   
      const filteredBestSalesProducts = products.filter(
      (item)=>item.category==='sofa');

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return(
    <>
  <Helmet title={'Home'}>
    {/***section1***/}
  <section className='hero__section'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-6'>
           <div className='hero__content'>
            <h2>Lorem ipsum dolor <br/>
            sit amet <br/>officiis nihil aut <br/>officia magnam</h2>

            <p>Lorem ipsum dolor sit amet. Rem officiis nihil aut officia 
              voluptas ut sint labore qui magnam error. </p>
              
              <button className='buy__btn'>
                <Link to='/products' >Apply now</Link>
              </button>
             
              <p className='subtitle'>NS.<span className='paragraphe'>Lorem ipsum dolor sit amet. Rem officiis
              <br/> nihil aut officia 
                voluptas ut sint labore qui magnam error. </span></p>
           </div>
        </div>
        <div className='col-lg-6 col-md-6'>
           <div className='hero__img'>
             <img src={heroImg} alt="img-header" />
           </div>
        </div>
      </div>
    </div>
  </section>
  {/***section1***/}
  <section className='content'>
    <div className='container'>
      <div className='row'>
      <div className='col-lg-6 col-md-6'>
        <div className='text'>
            <h2>
              Lorem ipsum dolor sit amet officiis nihil aut officia. 
            </h2>
        </div>
      </div>

      <div className='col-lg-6 col-md-6'>
        <div className='text-btn'>
          <p>Lorem ipsum dolor sit amet. Rem officiis <br/>
              nihil aut officia <br/>
              voluptas ut sint labore qui magnam error. </p>
              <button className='discover'>
                <Link to='/aboutus' >Discover More</Link>
              </button>
          </div>
        </div>
      </div>
    </div>
  </section>
   {/***section2***/}
   <section className='Strong points'>
    <div className='container'>
      <div className='row'>
      <div className='col-lg-4 col-md-4'>
        <div className='price'>
        <img className='img-point' src={price} alt="img-header" />
            <h3>  
              Lorem <br/>upsum okn p dolor sit amet.
            </h3>
            <p>Lorem ipsum dolor sit amet. Rem officiis 
              nihil aut officia 
              voluptas ut sint labore qui magnam error.  
          </p>
        </div>
      </div>

      <div className='col-lg-4 col-md-4'>
        <div className='price'>
        <img className='img-point' src={delivery} alt="img-header" />
          <h3>  
                Lorem<br/> upsum okn p dolor sit amet.
          </h3>
          <p>Lorem ipsum dolor sit amet. Rem officiis 
              nihil aut officia 
              voluptas ut sint labore qui magnam error.  
          </p>
          </div>
        </div>

        <div className='col-lg-4 col-md-4'>
        <div className='price'>
        <img className='img-point' src={task} alt="img-header" />
          <h3>  
                Lorem<br/> upsum okn p dolor sit amet.
          </h3>
          <p>Lorem ipsum dolor sit amet. Rem officiis 
              nihil aut officia 
              voluptas ut sint labore qui magnam error.  
          </p>
              
          </div>
        </div>
      </div>
    </div>
  </section>
  {/***section3***/}
   <section className="trending__products">
    <div className="container">
      <div className="row ">
        <div className="col-lg-12 text-center  pb-3">
          <h2 className='section__title'>Trending Products</h2>
        </div>
          
            <ProductsList data={trendingProducts}/>
            
     </div>
    </div>
   </section>
    {/***section4***/}
    <section className="best__sales">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center pb-3">
           <h2 className="section__title">Best Sales</h2>
          </div>
        
          <ProductsList data={bestSalesProducts}/>
      
        </div>
      </div>
    </section>
        {/***section5***/}
        <section className="timer__count">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 1 ">
                  <div className="clock__top-content">
                  <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                  <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                  </div>
                  <Clock/>
                  <motion.button  whileTap={{scale:1.2}} className='"buy__btn store__btn'>
                    <Link to="/products">Visit Store</Link>
                  </motion.button>
              </div>

              <div className="col-lg-6 col-md-12 text-end counter__img ">
                <img src={counterImg} alt="counterImg" />
              </div>
            </div>
          </div>
        </section>
  </Helmet>
  </>
  )}

export default Home