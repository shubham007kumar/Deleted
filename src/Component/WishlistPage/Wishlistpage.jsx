import React from 'react'
import { useEffect }    from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getTruewishlist} from '../../Redux/WishlistTrue/action'
import styles from './Wishlist.module.css'
export const Wishlistpage=()=>{
 const dataList=useSelector((state)=>state.TrueWishList.dataList)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getTruewishlist())
    },[dispatch])

    return(
        <div className={styles.container}>
          <div className={styles.onediv}>
            <div className={styles.twodiv}></div> 
            <div className={styles.three}></div>
          </div>
        </div>
    )
}