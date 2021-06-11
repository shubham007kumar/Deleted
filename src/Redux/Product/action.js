import axios from "axios"
import { FAILURE_REQUEST, GET_REQUEST, SUCCESS_REQUEST } from "./actionTypes"

export const get = (payload) => (dispatch) => {
    dispatch(getRequest())
 axios(`https://mymock-server-shubham00.herokuapp.com/Product_detail`)
 .then((res)=>{
     dispatch(successRequest(res.data))
 })
 .catch((err)=>{
     dispatch(failureRequest())
 })
}
export const getRequest=()=>{
    return{
        type:GET_REQUEST
    }
}

export const successRequest=(payload)=>{
    return{
        type:SUCCESS_REQUEST,
        payload
    }
}

export const failureRequest=()=>{
    return{
        type:FAILURE_REQUEST
    }
}