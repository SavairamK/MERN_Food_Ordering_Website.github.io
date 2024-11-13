import React, { useContext, useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {

    const { url, setToken } = useContext(StoreContext)

    const [currentState, setCurrentState] = useState('Login')

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url
        if (currentState === 'Login') {
            newUrl += '/api/user/login'
        }
        else {
            newUrl += '/api/user/register'
        }
        const response = await axios.post(newUrl, data)
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token)
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }

    return (
        <>
            <div className="login-popup">
                <form onSubmit={onLogin} className="login-popup-container">
                    <div className="login-popup-title">
                        <h2>{currentState}</h2>
                        <img
                            src={assets.cross_icon}
                            alt=""
                            onClick={() => setShowLogin(false)}
                        />
                    </div>
                    <div className="login-popup-input">
                        {
                            currentState === 'Login' ?
                                <></> : <input
                                    name='name'
                                    onChange={onChangeHandler}
                                    value={data.name}
                                    type="text"
                                    placeholder='Your Name'
                                    required
                                />
                        }
                        <input
                            name='email'
                            onChange={onChangeHandler}
                            value={data.email}
                            type="email"
                            placeholder='Your Email ID'
                            required
                        />
                        <input
                            name='password'
                            onChange={onChangeHandler}
                            value={data.password}
                            type="password"
                            placeholder='Enter strong password'
                            required
                        />
                    </div>
                    <button type='submit'>
                        {currentState === 'Sign Up' ? 'Create New Account' : 'Login'}
                    </button>
                    <div className="login-popup-condition">
                        <input type="checkbox" required />
                        <p>By continuing, I agree to the terms of use and privacy policy.</p>
                    </div>
                    {
                        currentState === 'Login' ?
                            <p>Don't have an account ? &nbsp;
                                <span onClick={() => setCurrentState('Sign Up')}>
                                    Create new account
                                </span>
                            </p>
                            :
                            <p>Already have an account ? &nbsp;
                                <span onClick={() => setCurrentState('Login')}>
                                    Login here
                                </span>
                            </p>
                    }
                </form>
            </div>
        </>
    )
}

export default LoginPopup
