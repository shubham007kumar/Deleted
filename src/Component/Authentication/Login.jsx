import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect} from "react-router";
import { login } from "../../Redux/Login/action";
import styles from "./Signup.module.css";

const init = {
  email: "",
  password: "",
};
export const Login = () => {
  const [query, setQuery] = useState(init);
  const dispatch = useDispatch();
  const Login = useSelector((state) => state.Login.Login);
  const message = useSelector((state) => state.Login.Loginmessage);
  const { email, password } = query;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const update = { ...query, [name]: value };
    setQuery(update);
  };

  //Redirect to Signup page
  const [state,setState]=useState(false)
  const handleGotosign=()=>{
        console.log(state)
        setState(pre => !pre)
       
  }
  if(state){
    return <Redirect to='/Signup' />
  }
  return (
    <>
      {Login ? (
        <Redirect to="/" />
      ) : (
        <div className={styles.container}>
          <h1 className={styles.H1}>Login in</h1>
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

            <input type="submit" value="Login" className={styles.submitField} />
          </form>
        </div>
      )}
      <p onClick={handleGotosign} className={styles.redirect}>Need an account?</p>
    </>
  );
};
