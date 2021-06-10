import {  REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"
import { auth } from '../../Firebase'

export const register=(payload)=> (dispatch)=>{
    const {email,password}=payload
     dispatch(registerRequest())
     auth.createUserWithEmailAndPassword(email,password)
     .then((res)=>{
       dispatch(registerSuccess(res))
     })
     .catch((err)=>{
       dispatch(registerFailure(err.message))
     })
}

export const registerRequest=(payload)=>{
  return{
    type:REGISTER_REQUEST,
    payload
  }
}

export const registerSuccess=(payload)=>{
  return{
    type:REGISTER_SUCCESS,
    payload
  }
}

export const registerFailure=(payload)=>{
  return{
    type:REGISTER_FAILURE,
    payload
  }
}