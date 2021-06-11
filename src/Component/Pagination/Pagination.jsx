import React from "react";
import styles from "./pagination.module.css";

export const Pagination = ({ product, limit, handleChange }) => {
  const len = product.length;
  const arr = [];
  for (var i = 1; i <= Math.ceil(len / limit); i++) {
    arr.push(i);
  }
  return (
    <>
      <div className={styles.container}>
        {arr.map((item) => {
          return (
            <button onClick={() => handleChange(item)} className={styles.btn} key={item}>
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};
