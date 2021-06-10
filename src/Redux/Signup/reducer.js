import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"

const init={
  Signup:false,
  isLoading:false,
  isErrow:false,
  Signmessage:''
}

export const Signupreducer=(state=init,{type,payload})=>{
  switch(type){
   case REGISTER_REQUEST:
     {
     return{
     ...state,
     isLoading:true,
     isErrow:false
     }
   }
   case REGISTER_SUCCESS:
     {
     return{
      ...state,
      Signup:true,
      isLoading:false,
     }
   }
  case REGISTER_FAILURE:
    {
    return{
     ...state,
     isErrow:true,
     isLoading:false,
     Signmessage:payload
    }
  }
   default:
     return state
  }
}