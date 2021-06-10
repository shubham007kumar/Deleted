import {  LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"
import { auth } from '../../Firebase'

export const login=(payload)=> async (dispatch)=>{
    const {email,password}=payload
    dispatch(loginRequest())
    auth.signInWithEmailAndPassword(email,password)
    .then((res)=>{
      dispatch(loginSuccess(res))
    })
    .catch((err)=>{
      dispatch(loginFailure(err))
    }) 
}

export const loginRequest=(payload)=>{
  return{
    type:LOGIN_REQUEST,
    payload
  }
}

export const loginSuccess=(payload)=>{
  return{
    type:LOGIN_SUCCESS,
    payload
  }
}

export const loginFailure=(payload)=>{
  return{
    type:LOGIN_FAILURE,
    payload
  }
}