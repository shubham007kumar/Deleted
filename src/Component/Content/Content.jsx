import React from 'react'
import styles from './Content.module.css'
import {data,data1,data2,data3,data4} from './Imagelist.js'
export const Content=()=>{
      
    return(
        <>
        <img className={styles.image} src="https://images-static.nykaa.com/uploads/97c7b392-4eca-4307-ae47-f0cf06bdf6b7.jpg?tr=w-1200,pr-true" alt='blank'/>
        <img className={styles.image2} src="https://images-static.nykaa.com/uploads/65501f8a-2010-4800-8d6f-e52fbc4e3a92.jpg?tr=w-1200,pr-true" alt='blank'/>
        <p className={styles.para1}>IN THE SPOTLIGHT</p>
        <div className={styles.imageContainer}>
            {
                data.map((item,index)=>(<img src={item} alt="blank" key={index}/>))
            }
        </div>
        <img className={styles.image3} src="https://images-static.nykaa.com/uploads/7d95c269-d35b-4764-9933-2c4bc4d79a2b.jpg?tr=w-1200,pr-true" alt="blank"/>
        <img className={styles.image3} src="https://images-static.nykaa.com/uploads/dc1a1fe6-889f-42f2-9b2a-57f1f7cfd025.jpg?tr=w-1200,pr-true" alt="blank"/>

        <p className={styles.para2}>SPECIAL SELECTION FOR YOU</p>
        <div className={styles.specialContainer}>
      {
            data1.map((item,index)=>(<img src={item} alt="blank" key={index}/>))
      }
        </div>

        <p className={styles.para2}>STORE IN FOCUS</p>
        <div className={styles.specialContainer}>
      {
            data2.map((item,index)=>(<img src={item} alt="blank" key={index}/>))
      }
        </div>

        <p className={styles.para2}>CATEGORY IN FOCUS</p>
        <div className={styles.specialContainer}>
      {
            data3.map((item,index)=>(<img src={item} alt="blank" key={index}/>))
      }
        </div>
        <p className={styles.para2}>FEATURED BRANDS</p>
        <div className={styles.featureDiv}>
      {
           data4.map((item,index)=>(<div key={index} className={styles.dataFour}>
               <img src={item.image} alt="blank" />
               <p>{item.title}</p>
               <p className={styles.subtitle}>{item.subtitle}</p>
           </div>))
      }
        </div>
         </>
    )
}