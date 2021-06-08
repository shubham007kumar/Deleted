import styled from 'styled-components'

export const Wrapper1=styled.div`
background-color: #3f414d;
color:#fff;
font-weight: 900;
width:100%;
display: flex;
justify-content: center;
column-gap:100px;
`;

export const DivOne=styled.div`
font-size: 14px;
margin-top: 20px;
margin-bottom: 20px;
position: relative;
.logoOne{
    font-size: 20px;
    position: absolute;
    left:-30px;
    top:10px;
}
.inputType{
    border:none;
    background-color:#3f414d ;
    border-bottom: 2px solid #fff;
    padding:5px 35px;
    margin-right: 10px;
    margin-left: -30px;
}
.btnType{
    padding:8px 8px;
    background-color:#3f414d ;
    color:#fff;
    border:1px solid #fff;
}
`
export const DivTwo=styled.div`
font-size: 14px;
position: relative;
margin-top: 20px;
margin-bottom: 20px;
.logoTwo{
  position: absolute;
    font-size: 20px;
    left:-30px;
    top:10px;
}
.insidediv{
   display :flex ;
   justify-content: space-between;
   align-items:center;
   column-gap: 15px;
}
.googlediv{
    background-color: #000;
    display :flex ;
    padding:0px 20px;
    column-gap: 5px;
   border-radius :10px;
    justify-content: space-between;
   .logoThree{
       font-size: 20px;
       margin-top: 12px;
   }
}
.applediv{
    background-color: #000;
    display :flex ;
    padding:0px 20px;
    border-radius :10px;
    column-gap: 5px;
    justify-content: space-between;
   .logoFour{
       font-size: 20px;
       margin-top: 12px;
   }
}
`
export const DivThree=styled.div`
font-size: 14px;
position: relative;
margin-top: 20px;
margin-bottom: 20px;
.logoFive{
position: absolute;
left: -20px;
top:15px;
}
`
export const Wrapper2=styled.div`
background-color: #8c8d94;
display: flex;
justify-content: space-evenly;
padding:30px 0px;
.divOne{
    color:#fff;
}
.para{
    margin-left: 38px;
    font-weight: 900;
    font-size: 16px;
}
.list{
   list-style-type:none
}
.list>li{
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 14px;
}
`;

export const Wrapper3=styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
padding:40px 0px;
font-weight: 900;
font-size: 14px;
.circle{
    background-color: #fc2779;
    height:50px;
    width: 50px;
    border-radius: 50%;
}
.tagLogo{
    color:#fff;
    font-size: 32px;
    margin-left: 8px;
    margin-top: 10px;
}
.textWrapper{
    display: flex;
    justify-content: center;
    column-gap: 20px;
}
.logo{
    font-size: 22px;
    display: flex;
    justify-content: center;
    column-gap: 20px;
}
`

export const Wrapper4=styled.div`
text-align: center;
background-color: #fc2779;
font-size: 14px;
padding:10px 0px;
color:#fff;
.policy{
    display: flex;
    justify-content: center;
    column-gap: 30px;
}
.policy2{
   font-size: 12px;
   margin-top: -15px;
}
`