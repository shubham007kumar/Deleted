import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getcartdata } from '../../Redux/Cart/action'
import styles from './Cart.module.css'
export const Cart=()=>{
    const dataList=useSelector((state)=>state.Cart.dataList)
    const [data,setData]=useState(false)
    const dispatch=useDispatch()
    console.log(dataList)
    useEffect(()=>{
     dispatch(getcartdata())
    },[dispatch])
    const handleClick=()=>{
      setData(pre => !pre)
    }
    return(
        <>
        <button onClick={handleClick}>button</button>
        <div className={data ? styles.container  : styles.notcontainer}>
           {
               dataList.map((item)=>{
                   return(
                       <div key={item.id}>
                           <h1>{item.Price}</h1>
                       </div>
                   )
               })
           }
        </div>
        </>
    )
}