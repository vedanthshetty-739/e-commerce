import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Person2Icon from '@mui/icons-material/Person2';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function Login({onClose}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const writeUserName = (e)=>{
        setUsername(e.target.value)
    }

    const writePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handleLogin = ()=>{
        if (username.trim() ==="rahul" && password.trim() === "1234"){
            setError("Success!!!")
        }
        else{
            setError("Invalid Username or Password")
        }
    }

    return (
        <div className="login-page">
            <div className="login-items">
                <div className="login-banner">
                    <h2>Login</h2>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                </div>
                <div className="login-form">
                    <div className="input-wrapper">
                        <input type="text" name="username" value={username} placeholder="Enter Username" onChange = {(e)=>writeUserName(e)}/>
                        <Person2Icon />
                    </div>
                    <div className="input-wrapper">
                    <input type="password" name="password" value={password} placeholder="Enter password" onChange ={(e)=>writePassword(e)}/>
                    <LockOpenIcon />
                    </div>
                    {error && <h3>{error}</h3>}
                    <button type="button" onClick={handleLogin}>Login</button>
                </div>
                <CloseIcon  onClick={() => onClose(false)} className='model-close'/>
            </div>
               
        </div>

    )
}

export default Login
