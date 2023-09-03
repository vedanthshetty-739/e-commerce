import React, { useRef, useState } from 'react'
import styles from '../assests/css/style.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Login from '../pages/Login';
import Model from '../pages/Model';


function Header() {
  const [login, setLogin] = useState(false)
  const HandleLogin = (show)=> setLogin(show)
  const searchInput = useRef("");

  console.log(searchInput.current.value)
  return (
    <div className="header">
        <p>Flipkart</p>
        <span>
        <input type="text" name="search" id="search" placeholder="Search for products, brands and more" value={searchInput.current.value} />
        <SearchIcon sx={{color:'white', cursor:'pointer'}}></SearchIcon>
        </span>
        
        <button type="button" className='header_buttons' onClick={()=>HandleLogin(true)}>Login</button>
        <button type="button" className='header_buttons'>Become a seller</button>
        <button type="button" className='header_buttons'>More</button>
        <span>
        < ShoppingCartIcon/>
            <button type="button" className='header_buttons'>Cart</button>
        </span>

        {login && <Model><Login onClose ={HandleLogin}/></Model>}

    </div>
    
  )
}

export default Header


