import React from 'react'
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query'
import axios from 'axios'
import Button from 'react-bootstrap/Button';


const ProductDetails = () => {
    let { id } = useParams();
    async function fetchProduct(){
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)    
        return data
    }
      const {data, error, isError, isLoading } = useQuery('product', fetchProduct) 
      if(isLoading){
        return <div className='text-center'>Loading...</div>
      }
      if(isError){
          return <div>Error! {error.message}</div>
      }

  return (
    <section>
      <div className="container px-2 py-4">
        <div className="row">
          <div className="col-lg-6">
            <img alt="product-img" className="img-fluid rounded" style={{ height: '500px', objectFit: 'cover' }} src={data.image} />
          </div>
          <div className="col-lg-6 mt-4 d-flex justify-content-center flex-column">
            <h2 className="text-uppercase  py-2 text-muted">{data.category}</h2>
            <h1 className="text-dark text-3xl py-2 font-weight-bold mb-1 text-justify">{data.title}</h1>
            <p className="text-justify">{data.description}</p>
            <div className="d-flex">
              <span className="h3">Rs. {data.price}</span>
            </div>
            <div className='my-2'>
          <Button variant="primary">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails