import ProductCard from '../components/ProductCard'
import React, { useState, useEffect } from 'react';
import { useLocation  } from "react-router-dom";

function ProductList() {
  const location = useLocation();
  const selectedCategory = location.state.selectedCategory || '';
  console.log(`selectedCategory: ${selectedCategory}`)
  const [products, setProducts] = useState([])
  useEffect(() => {
    let url = 'https://dummyjson.com/products'
    if (selectedCategory !== ""){
      url = `https://dummyjson.com/products/category/${selectedCategory}`
    }
    console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data["products"])})
      .catch(error => console.error('Error fetching categories:', error));
  }, [selectedCategory]);

  return (
    <>
    {
      products.map(product =><ProductCard key={product.id} {...product} />)
      
    }
    </>
    
  )
}

export default ProductList
