import React from 'react'
import { GrMail } from "react-icons/gr";
import { MdPhoneAndroid } from "react-icons/md";
import {Wrapper1,DivOne,DivTwo,DivThree, Wrapper2, Wrapper3, Wrapper4} from './Style.js'
import { IoLogoGooglePlaystore,IoLogoApple ,IoCall} from "react-icons/io5";
import { AiFillTag } from "react-icons/ai";
import { FaInstagram,FaFacebookSquare,FaYoutube,FaTwitter,FaPinterestP } from "react-icons/fa";
export const Footer=()=>{
    return(
        <>
        <Wrapper1>
           <DivOne>
           <p><span className="logoOne"><GrMail  /></span>GET SPECIAL DISCOUNT ON YOUR INBOX</p>
           <input 
           className="inputType"
           required
           placeholder="Your Email"
           type='email'/>
           <button className="btnType">Send</button>
           </DivOne>
           <DivTwo>
           <span className="logoTwo"><MdPhoneAndroid/></span><p>EXPERIENCE THE NYKAA MOBILE APP</p>
           <div className='insidediv'>
              <div className="googlediv">
                   <IoLogoGooglePlaystore className="logoThree" />
                    <div >
                      <p>Get it on</p>
                      <p>Google Play</p>
                    </div>
                </div> 
                <div className="applediv">
                  <IoLogoApple className="logoFour" />
                  <div>
                      <p>Get it on</p>
                      <p>Apple Store</p>
                    </div>
                </div>
           </div>
           </DivTwo>
           <DivThree>
            <span className="logoFive"> <IoCall/></span>  <p>FOR ANY HELP YOU MAY CALL US AT</p>
              <p>1800-267-4444</p>
              <p>Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM</p>
           </DivThree>
        </Wrapper1>
        <Wrapper2>
           <div className="divOne">
             <p className="para">NYKAA</p>
             <ul  className="list">
               <li>WHO WE ARE</li>
               <li>CAREERS</li>
               <li>AUTHENTICITY</li>
               <li>PRESS</li>
               <li>TESTIMONIALS</li>
               <li>NYKAA CSR</li>
               <li>RISPONSIBLE DISCLOSURE</li>
             </ul>
           </div>
           <div className="divOne">
           <p className="para">HELP</p>
             <ul className="list">
               <li>CONTACT US</li>
               <li>FREQUENTLY ASKED QUESTIONS</li>
               <li>STORE LOCATOR</li>
               <li>CANCELLATION & RETURN</li>
               <li>SHIPPING & DELIVERY</li>
             </ul>
           </div>
           <div className="divOne">
           <p className="para">INSPIRE ME</p>
             <ul className="list">
               <li>BEAUTY BOOK</li>
               <li>NYKAA TV</li>
               <li>NYKAA NETWORK</li>
               <li>BUYING GUIDES</li>
             </ul>
           </div>
           <div className="divOne">
           <p className="para">QUICK LINKS</p>
             <ul className="list">
               <li>OFFER ZONE </li>
               <li>NEW LAUNCHES</li>
               <li>NYKAA MAN</li>
               <li>NYKAA FASHION</li>
               <li>NYKAA PRO</li>
               <li>NYKAA FEMINA</li>
               <li>SITEMAP</li>
             </ul>
           </div>
           <div className="divOne">
           <p className="para">TOP CATEGORIES</p>
             <ul className="list">
               <li>MAKEUP</li>
               <li>SKIN</li>
               <li>HAIR</li>
               <li>PERSONAL CARE</li>
               <li>APPLIANCES</li>
               <li>MOM AND BABY</li>
               <li>WELLNESS</li>
               <li>FRAGRANCE</li>
               <li>NATURAL</li>
             </ul>
           </div>
        </Wrapper2>
        <Wrapper3>
          <div className="textWrapper">
             <div className="circle">
                 <AiFillTag className="tagLogo"/>
             </div>
             <div>
               <p>1500 BRANDS</p>
               <p>well Current 3Lakh+Product</p>
             </div>
          </div>
          <div className="textWrapper">
          <div className="circle">
                 <AiFillTag className="tagLogo"/>
             </div>
             <div>
               <p>1500 BRANDS</p>
               <p>well Current 3Lakh+Product</p>
             </div>
          </div>
          <div className="textWrapper">
          <div className="circle">
                 <AiFillTag className="tagLogo"/>
             </div>
             <div>
               <p>1500 BRANDS</p>
               <p>well Current 3Lakh+Product</p>
             </div>
          </div>
          <div>
            <p>SHOW US SOME LOVE ❤ ON SOCIAL MEDIA</p>
            <div className="logo">
              <FaInstagram/>
              <FaFacebookSquare/>
              <FaYoutube/>
              <FaTwitter/>
              <FaPinterestP/>
            </div>
          </div>
        </Wrapper3>
        <Wrapper4>
          <div className="policy">
            <p>TERM & CONDITIONS</p>
            <p>FREE SHIPPING</p>
            <p>CANCELLATION POLICY</p>
            <p>PRIVACY POLICY</p>
          </div>
          <div className="policy2">
            <p>© 2021 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </Wrapper4>
        </>
    )
}