import React from 'react'
import styles from './Error.module.css'
export const Error=()=>{
    return(
        <>
       <div className={styles.container}>
       <div className={styles.subcontainer}>
       <p className={styles.p1}>Oh My...</p>
        <p className={styles.p2}>It Looks like this page has been lost</p>
       </div>
        <img className={styles.img} src="/24.svg" alt='blank' />
       </div>
        </>
    )
}