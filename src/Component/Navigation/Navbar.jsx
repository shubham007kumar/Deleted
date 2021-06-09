import React, { useState } from 'react'
import { Container, Hidden, Img, Input, SubContainer,Wrapper1,Wrapper2 } from './Style.js'
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import {image} from './data.js'
import { Link } from 'react-router-dom';
export const Navbar=()=>{
    const [click,setClick]=useState(false)
    const [category,setCategory]=useState(false)
    const [advice,setAdvice]=useState(false)
    const handleBrand=()=>{
        setClick(pre=>!pre)
    }
    const handleCategory=()=>{
      setCategory(pre=>!pre)
    }
    const handleAdvice=()=>{
      setAdvice(pre=>!pre)
    }
    return(
        <>
        <Container>
          
          <Wrapper1>
            <Img
                src="https://adn-static1.nykaa.com/media/wysiwyg/HeaderIcons/NykaaLogoSvg.svg" alt="blank"/>
                <p onClick={handleCategory} className="brand">CATEGORIES</p>
                <p onClick={handleBrand} className="brand">BRANDS</p>
                <p>NYKAA FASHION</p>
                <p onClick={handleAdvice}>BEAUTY ADVICE</p>
                <p>NYKAA NETWORK</p>
                <SubContainer>
                <span className="searchLogo"><FaSearch/></span> 
                <Input type="text"
                placeholder="Search product, brands"/>
                </SubContainer>
          </Wrapper1> 

           <Wrapper2>
                <p><span className="userLogo"><BiUser/></span>Account</p>
                <span className="cartLogo"><FiShoppingCart/></span>
           </Wrapper2>
        
        </Container>
        <Hidden>
        <div className={click?"divBlock":"divNone"}>
          <div className="inputDiv">
        <Input type="text"
                placeholder="Search product, brands"/>
          </div>
          <div className="imageDiv">
            <div className="buttonDiv">
                <button className="btnstyle">POPULAR</button>
                <button className="btnstyle">FEATURED</button>
                <button className="btnstyle">ONLY AT NYKAA</button>
                <button className="btnstyle">NEW LAUNCHED</button>
            </div >
           <div className="imgDiv">
           {
        image.map((item)=>(<img src={item} alt="blank"/>))
            }
           </div>
          </div>
        </div>
        <div className={category ? "categoryBlock" : "categoryNone"}>
          <Link to='/makeup' className="link">Makeup</Link>
          <Link className="link">Skin</Link>
          <Link className="link">Hair</Link>
          <Link className="link">Appliances</Link>
          <Link className="link">Personal Care</Link>
          <Link className="link">Nature</Link>
          <Link className="link">Mom & baby</Link>
          <Link className="link">Health & Wellness</Link>
          <Link className="link">Men</Link>
          <Link className="link">Fragrance</Link>
          <Link className="link">Luxe</Link>
        </div>
        <div className={advice ? "adviceBlock" : "adviceNone"}>
         <div className="adviceOne">
           <img src="https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg" alt="blank"/>
           <p>Beauty Look</p>
           <p>Nykaa's Digital Magazine</p>
         </div>
         <div className="adviceOne">
         <img src="https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png" alt="blank"/>
           <p>Beauty Look</p>
           <p>Nykaa's Digital Magazine</p>
         </div>
         <div className="adviceOne">
         <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/buyingguide_dropdowntile.jpg" alt="blank"/>
           <p>Beauty Look</p>
           <p>Nykaa's Digital Magazine</p>
         </div>
         <div className="adviceOne">
         <img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/Routine-Finder.jpg" alt="blank"/>
           <p>Beauty Look</p>
           <p>Nykaa's Digital Magazine</p>
         </div>
        </div>
        </Hidden>
        </>
    )
}