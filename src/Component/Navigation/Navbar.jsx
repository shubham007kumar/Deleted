import React, { useState } from 'react'
import { Container, Hidden, Input, SubContainer,Wrapper1,Wrapper2 } from './Style.js'
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import {image} from './data.js'
import { Link } from 'react-router-dom';
import {animated,config, useSpring } from 'react-spring';
import { useSelector } from 'react-redux';
import { auth } from '../../Firebase.js';
import styled from 'styled-components';

export const Navbar=()=>{
    const [click,setClick]=useState(false)
    const [category,setCategory]=useState(false)
    const [advice,setAdvice]=useState(false)
    const Login=useSelector((state)=>state.Login.Login)
    const [user,setUser]=useState()
    const handleBrand=()=>{
        setClick(pre=>!pre)
    }
    const handleCategory=()=>{
      setCategory(pre=>!pre)
    }
    const handleAdvice=()=>{
      setAdvice(pre=>!pre)
    }

    const [flip, set] = useState(false)
    const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  if(Login)
  {
     auth.onAuthStateChanged(user => {
      setUser(user.email.slice(0,6))
    })
  }
    return(
        <>
        <Container>
          
          <Wrapper1>
            <animated.img style={{width:"100px",...props}}
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
            <Link to='/Signup' className="accoutLink"><p><span className="userLogo"><BiUser/></span>{Login ? user:'Account'}</p></Link> 
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
        image.map((item,index)=>(<img src={item} alt="blank" key={index}/>))
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