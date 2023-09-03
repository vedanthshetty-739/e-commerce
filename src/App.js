import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.jsx';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/products/" element={<ProductList/>} />
    
    </Routes>
  );
}

export default App;

