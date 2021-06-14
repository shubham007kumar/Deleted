import React from 'react'
import { useEffect }    from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getTruewishlist} from '../../Redux/WishlistTrue/action'
import { FaUserCircle,FaWallet,FaShuttleVan,FaHeart } from "react-icons/fa";
import { IoIosChatbubbles} from "react-icons/io";
import styles from './Wishlist.module.css'
import styled from 'styled-components'
export const Wishlistpage=()=>{
 const dataList=useSelector((state)=>state.TrueWishList.dataList)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getTruewishlist())
    },[dispatch])

const Div=styled.div`
background-color: #eceff1;
`
    return(
        <Div>
          <div className={styles.onediv}>
            <div className={styles.twodiv}>
                 <div className={styles.threediv}>
                   <span><FaUserCircle/></span>
                   <p>My Profile</p>
                 </div>
                 <div className={styles.threediv}>
                   <span><FaWallet/></span>
                   <p>My Wallet</p>
                 </div>
                 <div className={styles.threediv}>
                   <span><FaShuttleVan/></span>
                   <p>My Order</p>
                 </div>
                 <div className={styles.threediv}>
                   <span><FaHeart/></span>
                   <p>My Wishlist</p>
                 </div>
                 <div className={styles.threediv}>
                   <span><IoIosChatbubbles/></span>
                   <p>Q & A</p>
                 </div>
            </div> 
            <div className={styles.fourdiv}>
               {
                   dataList.map((item)=>{
                       return(
                           <div key={item.id} className={styles.fivediv}>
                               <img src={item.Image} alt="blank" className={styles.img} />
                               <p className={styles.param}>{item.ProduceName}</p>
                               <p>{item.Price}</p>
                           </div>
                       )
                   })
               }
            </div>
          </div>
        </Div>
    )
}