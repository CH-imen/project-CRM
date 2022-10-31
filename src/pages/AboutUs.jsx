
import React from 'react';
import Helmet from "../components/Helmet/Helmet";
import '../styles/aboutus.css'
import About from '../Images/about.jpg';



const AboutUs = ()=> {

  return(
    <>
  <Helmet title={'AboutUs'}>
    {/***section1***/}
  <section className='hero__section'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-6'>
           <div className='hero__content'>
            <h2>We connect companies 
and customers</h2>
           </div>
        </div>
        <div className='col-lg-6 col-md-6'>
          <p>Lorem ipsum dolor sit amet. Rem officiis 
nihil aut officia voluptas ut sint labore  
magnam error actross main bash duh.</p>
<p>Lorem ipsum dolor sit amet. Rem officiis 
nihil aut officia voluptas ut sint labore  
magnam error actross main bash duh.</p>

        </div>
      </div>
    </div>
  </section>
   
   {/***section2***/}
   <section>
     
        <div>
        <img className='img-about ' src={About} alt="img-about" />
         
    </div>
  </section>
  {/***section3***/}
   <section className="trending__products">
    <div className="container">
      <div className="row ">
        <div className="col-lg-6 text-left  pb-3">
          <h2 className='section__title'>Together we 
Make fortune </h2>
        </div>
          
        <div className="col-lg-6 text-left  pb-3">
         <p>Lorem ipsum dolor sit amet. Rem officiis 
nihil aut officia voluptas ut sint labore  
magnam error actross main bash duh.</p>

<p>Lorem ipsum dolor sit amet. Rem officiis 
nihil aut officia voluptas ut sint labore  
magnam error actross main bash duh.<br/>
Lorem ipsum dolor sit amet. Rem officiis 
nihil aut officia voluptas ut sint labore  
magnam error actross main bash duh.</p>
        </div>
  
            
     </div>
    </div>
   </section>
   
  </Helmet>
  </>
  )}

export default AboutUs