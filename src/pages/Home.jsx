import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Category from '../components/Category';
import { useNavigate } from "react-router-dom";

function Home() {
  const [categories, setCategories] = useState([]);

  let navigate = useNavigate(); 

  const routeChange = (category) => { 
    let path = '/products'; 
    let params = {
      selectedCategory: category
    };
    navigate(path, { state: params });
  }

  const handledSelectedCategory =(e)=>{
    routeChange(e.target.value)
  }


  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);



  return (
    <>
      <Header />
      <div className="category">
      {categories.map(category => (
          <Category key={category.id} category={category} handledSelectedCategory={handledSelectedCategory}/> 
      ))}
      </div>
    </> 
  );
}

export default Home;
