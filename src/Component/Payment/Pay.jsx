import React,{useState} from 'react'
import styles from './pay.module.css'
import {FaCreditCard } from "react-icons/fa";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

const intivalue={
    name:'',
    number:'',
    month:'',
    year:'',
    cvc :''
  }

export const Pay=()=>{
    const [query,setQuery]=useState(intivalue)
    const {name,number,month,year,cvc}=query

    const handleChange=(e)=>{
        const {name,value}=e.target
        setQuery({...query,[name]:value})
      }
    const handlePayment=()=>{
        store.addNotification({
            title:"",
            message:"Order Placed Successfully",
            type:"success",
            container:"bottom-center",
            animationIn:["animated","fadeIn"],
            animationOut:["animated","fadeout"],
            dismiss:{
              duration:2000
            },
            width:150
           })
    }
    return(
        <>
      <div className={styles.notification}> <ReactNotification/></div> 
        <div className={styles.container}>
            <div className={styles.container1}>
              <h3 className={styles.vita}>VISA</h3>
                <FaCreditCard className={styles.card}/>
                <h2 className={styles.number}>{number.length ===0 ?'1234 1234 1234 1234':number}</h2>
                <div className={styles.cvc}>
                <p>{name.length===0?'JOHN SMITH':name}</p>
                <p>{month.length===0?'09/2021':`${month}/${year}`}</p>
                <p>{cvc.length===0?'123':cvc}</p>
                </div>
            </div>
            <div className={styles.container2}>
                <p className={styles.payment}>Payment Detail</p>
                <label className={styles.label}>CARDHOLDER NAME<br/>
                <input 
                className={styles.input}
                name="name"
                value={name}
                onChange={handleChange}
                type="text"
                placeholder="John Smith"
                />
                </label><br/>
                <label className={styles.label}>CARD NUMBER<br/>
                <input
                className={styles.input}
                name="number"
                value={number}
                onChange={handleChange} 
                type="text"
                placeholder="1234 1234 1234 1234"
                />
                </label><br/>
                <div className={styles.subcontainer}>
                <label  className={styles.label}>EXPIRY MONTH<br/>
                <input 
                name="month"
                className={styles.input2}
                value={month}
                onChange={handleChange}
                type="text"
                placeholder="09"
                />
                </label>
                <label  className={styles.label}>EXPIRY YEAR<br/>
                <input 
                className={styles.input2}
                name="year"
                value={year}
                onChange={handleChange}
                type="text"
                placeholder="2021"
                />
                </label>
                <label  className={styles.label}>CVC<br/>
                <input 
                name="cvc"
                className={styles.input2}
                value={cvc}
                onChange={handleChange}
                type="text"
                placeholder="123"
                />
                </label>
            </div>
            <input type="submit" value="PAY" onClick={handlePayment} className={styles.button} />
            </div>
        </div>
        </>
    )
}