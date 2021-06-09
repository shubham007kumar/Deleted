import styled from 'styled-components'

export const Container=styled.div`
display: flex;
justify-content: center;
column-gap: 50px;
align-items: center;
font-size: 14px;
font-weight: 900;
`

export const Wrapper1=styled.div`
display: flex;
justify-content:center;
column-gap: 30px;
align-items: center;
.brand:hover{
color:#e91e63;
}
`
export const Wrapper2=styled.div`
display: flex;
justify-content: center;
column-gap: 50px;
align-items: center;
.userLogo{
    font-size:18px;
    color: #000;
    margin-right: 5px;
    padding-top: 10px;
}
.cartLogo{
    font-size:22px;
}
`

export const Img=styled.img`
width: 100px;
`

export const SubContainer=styled.div`
position: relative;
.searchLogo{
    position: absolute;
    font-size: 20px;
    top:8px;
    left:8px
}
`
export const Input=styled.input`
padding:10px 35px;
background-color: rgb(243, 243, 243);
border-radius: 10px;
border: 1px solid rgb(243, 243, 243);
&:hover{
border: 1px solid #e91e63;
}
`
export const Hidden=styled.div`


.divNone{
    display: none;
}

.divBlock{  
    display: flex;
    justify-content: space-between;
    position: absolute;
    width:76%;
    left:180px;
    top:50px;
    background-color: #fff;
    z-index:1;
    transition: 0.5s height;
    .inputDiv{
      padding-top:30px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .imageDiv{
      padding-top: 30px;
      padding-bottom: 70px;
      background-color: #eceff1;
      .buttonDiv{
       margin-left: 230px;
       margin-bottom: 20px;
      }
    } 

    .btnstyle{
        padding:8px 10px;
        font-size: 14px;
        font-weight: 500;
        border: none;
        background-color: #babdbe;
        margin-left: 10px   ;
        :hover{
            background-color: #fc2779;
        }
    }
   .imgDiv{
       margin-left: 150px;
       margin-right: 100px;
       columns:4;
   }

}

.categoryNone{
    display: none;
}

.categoryBlock{  
    font: 14px;
    font-weight: 300;
    display: flex;
    border-top: 1px solid #000;
    color:#37474f;
    justify-content:center;
    column-gap:20px;
    position: absolute;
    width: 100%;
    background-color: #fff;
    top:50px;
    z-index:1;
    .link{
        text-decoration: none;
        padding:10px 0px;
        color:#37474f;
    }
}

.adviceNone{
       display: none;
   }


   .adviceBlock{  
    font: 14px;
    font-weight: 500;
    display: flex;
    border-top: 1px solid #000;
    color:#37474f;
    justify-content:center;
    column-gap:20px;
    position: absolute;
    width: 70%;
    border-radius: 10px;
    left:200px;
    background-color: #fff;
    top:50px;
    z-index:1;
    padding: 20px 0px;
    .link{
        text-decoration: none;
        padding:10px 0px;
        color:#37474f;
    }
    .adviceOne{
        :hover{
            color:#e91e63
        }
    }
    .adviceOne>img{
        :hover{
            border:2px solid #e91e63;
            border-radius: 10px;
        }
    }
}
`