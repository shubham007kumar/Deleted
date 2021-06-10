import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../Redux/Login/action';
import styles from './Signup.module.css'

const init={
    email:'',
    password:'',
    }
export const Login=()=>{
    const [query,setQuery]=useState(init)
    const dispatch=useDispatch()
    const Login=useSelector((state)=>state.Login.Login)
     const {email,password}=query

     const handleSubmit=(e)=>{
       e.preventDefault()
       dispatch(login({email,password}))
     }

     const handleChange=(e)=>{
        const {name,value}=e.target
        const update={...query,[name]:value}
        setQuery(update)

     }
    return(
        <>
  {Login ? <Redirect to='/' /> :   <div className={styles.container}>
            <h1 className={styles.H1}>Login in</h1>
            <hr className={styles.hori}/>
            <form onSubmit={handleSubmit}>
                    <label className={styles.label}>Email <input type="email"
                    className={styles.inputField}
                    name="email" 
                    value={email}
                    onChange={handleChange} required/></label>
                
                    <label className={styles.label}>Password<input type="password"
                    className={styles.inputField}
                    name="password" 
                    value={password}
                    onChange={handleChange} required/></label>

                    <input type="submit" value="Login" className={styles.submitField}/>
            </form>
       </div>}
        </>
    )
}