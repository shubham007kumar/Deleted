import React, { useState } from "react";
import styles from "./Address.module.css";
import Fade from 'react-reveal/Fade';
import {Redirect} from 'react-router-dom'
const init = {
  name: "",
  mobile: "",
  code: "",
  address:""
};

export const Address = () => {
  const [query, setQuery] = useState(init);
  const {name,mobile,code,address}=query
  const handleSubmit = (e) => {
    e.preventDefault()
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const update = { ...query, [name]: value };
    setQuery(update);
  };
  //for going to payment page
  const [pay,setPay]=useState(false)
  const handlePayment=()=>{
    setPay(pre =>!pre)
  }
  if(pay)
  {
     return  <Redirect to='/payment' />
  }
  return (
    <>
    <div className={styles.container1}>
        <div className={styles.subcontainer1}>
          <img src='48153211a72a224d29af94d81450beeb.jpg' alt='blank' className={styles.img} />
        </div>
           <Fade right> <div className={styles.subcontainer2}>
                <h1 className={styles.H1}>Address</h1>
                <hr className={styles.hori} />
                <form onSubmit={handleSubmit}>
                    <label className={styles.label}>
                    Name{" "}
                    <input
                        type="text"
                        className={styles.inputField}
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                    </label>

                    <label className={styles.label}>
                    Phone Number
                    <input
                        type="number"
                        className={styles.inputField}
                        name="mobile"
                        value={mobile}
                        onChange={handleChange}
                        required
                    />
                    </label>

                    <label className={styles.label}>
                    Postal Code
                    <input
                        type="number"
                        className={styles.inputField}
                        name="code"
                        value={code}
                        onChange={handleChange}
                        required
                    />
                    </label>
                    <label className={styles.label}>
                    Address
                    <input
                        type="text"
                        className={styles.inputField}
                        name="address"
                        value={address}
                        onChange={handleChange}
                        required
                    />
                    </label>

                    <input
                    type="submit"
                    value="Payment"
                    onClick={handlePayment}
                    className={styles.submitField}
                    />
                </form>
            </div></Fade>
    </div>
    </>
  );
};
