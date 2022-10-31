import React, {useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import '../styles/products.css'
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductsList'

const Products= ()=> {

  const[productsData, setProductsData] = useState(products)
  const handleFilter = (e)=>{
     const filterValue = e.target.value
       if (filterValue ==='clothes'){
        const filteredProducts = products.filter
        (item=>item.category==='clothes')
          setProductsData(filteredProducts);
       }
       if (filterValue ==='appartement'){
        const filteredProducts = products.filter
        (item=>item.category==='appartement')
          setProductsData(filteredProducts);
       }
       if (filterValue ==='vehicules'){
        const filteredProducts = products.filter
        (item=>item.category==='vehicules')
          setProductsData(filteredProducts);
       }
       if (filterValue ==='sofa'){
        const filteredProducts = products.filter
        (item=>item.category==='sofa')
          setProductsData(filteredProducts);
       }
  };


  const handleSearch = (e)=>{
    const searchTerm = e.target.value
    const searchedProducts = products.filter(item=>item.productName.
      toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    setProductsData(searchedProducts)
    }

  return <Helmet title='Products'>
   

    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
             <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Filter By Category</option>
                <option value="clothes">Clothing </option>
                <option value="appartement">Appartments  </option>
                <option value="vehicules">Vehicles   </option>
                <option value="sofa">Sofa</option>
              </select>
             </div>
          </div>
          
         <div className="col-lg-6 col-md-12">
          <div className="search__box">
            <input type="text" placeholder='Search among 1OO+ products' onChange={handleSearch}/>
             <span>
             <i class="ri-search-line"></i>
             </span>
          </div>
         </div>
        </div>
      </div>
    </section>
    <section className='pt-0'>
      <div className="container">
        <div className="row">
          {
            productsData.length===0? <h1 className='text-center'fs-4>No products are found!</h1>
          
            :<ProductList data={productsData} />  
            
          }
        </div>
      </div>
    </section>
  </Helmet>
};

export default Products