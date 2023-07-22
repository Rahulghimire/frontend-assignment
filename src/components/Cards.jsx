import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useQuery} from 'react-query'
import axios from 'axios'
import ProductCard from './ProductCard';

const Cards = () => {
  async function fetchProducts(){
    const {data} = await axios.get('https://fakestoreapi.com/products')    
    return data
}
  const {data, error, isError, isLoading } = useQuery('products', fetchProducts) 
  if(isLoading){
    return <div className='text-center'>Loading...</div>
  }
  if(isError){
      return <div>Error! {error.message}</div>
  }

  return (
    <div className='d-flex gap-4 py-4 px-1 flex-wrap justify-content-around' style={{ backgroundColor: '#f8f9fa' }}>
      {data.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
  </div>
    
  )
}

export default Cards