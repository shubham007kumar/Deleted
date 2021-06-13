import React from 'react'
import { useEffect }    from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getTruewishlist} from '../../Redux/WishlistTrue/action'

export const Wishlistpage=()=>{
 const dataList=useSelector((state)=>state.TrueWishList.dataList)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getTruewishlist())
    },[dispatch])
    console.log(dataList)
    return(
        <>
         
        </>
    )
}