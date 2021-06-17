import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { register } from "../../Redux/Signup/action";
import styles from "./Signup.module.css";
const init = {
  email: "",
  password: "",
  config: "",
};

export const Signup = () => {
  const [query, setQuery] = useState(init);
  const { email, password, config } = query;
  const dispatch = useDispatch();
  const Signup = useSelector((state) => state.Signup.Signup);
  const message = useSelector((state) => state.Signup.Signmessage);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== config) {
      return alert("Password are not same");
    }
    dispatch(register({ email, password }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const update = { ...query, [name]: value };
    setQuery(update);
  };
 //Redirect to Signup page
 const [state,setState]=useState(false)
 const handleGotosign=()=>{
       setState(pre => !pre)
      
 }
 if(state){
   return <Redirect to='/login' />
 }
  return (
    <>
      {Signup ? (
        <Redirect to="/login" />
      ) : (
        <div className={styles.container1}>
          <h1 className={styles.H1}>Sign Up</h1>
          <p className={styles.error}>{message}</p>
          <hr className={styles.hori} />
          <form onSubmit={handleSubmit}>
            <label className={styles.label}>
              Email{" "}
              <input
                type="email"
                className={styles.inputField}
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.label}>
              Password
              <input
                type="password"
                className={styles.inputField}
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.label}>
              Confimed Password
              <input
                type="password"
                className={styles.inputField}
                name="config"
                value={config}
                onChange={handleChange}
                required
              />
            </label>

            <input
              type="submit"
              value="Signup"
              className={styles.submitField}
            />
          </form>
        </div>
      )}
      <p onClick={handleGotosign} className={styles.redirect1}>Already have  an account?</p>
    </>
  );
};
