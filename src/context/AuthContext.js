import React, { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [jwt, setjwt] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    let loginUser = async (e )=> {
        e.preventDefault()
        let response = await fetch('/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        let data = await response.json()

        if(response.status === 200){
            setjwt(data)
            setUser(jwt_decode(data.jwt))
            localStorage.setItem('jwt', JSON.stringify(data))
            navigate('/')
        }else{
            alert('Something went wrong!')
        }
    }


    let logoutUser = () => {
        setjwt(null)
        setUser(null)
        localStorage.removeItem('jwt')
        navigate('/login')
    }

    
    let updateToken = async ()=> {

        let response = await fetch('/refresh', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':jwt?.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setjwt(data)
            setUser(jwt_decode(data.jwt))
            localStorage.setItem('jwt', JSON.stringify(data))
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }
  
    let contextData = {
        user:user,
        jwt:jwt,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }


    useEffect(()=> {

        if(loading){
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4

        let interval =  setInterval(()=> {
            if(jwt){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [jwt, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}