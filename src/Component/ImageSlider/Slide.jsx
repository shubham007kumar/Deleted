import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import styles from "./Image.module.css";
const imgData = [
  "https://images-static.nykaa.com/uploads/827e6132-436c-4c3b-9a08-912fb9fb0e75.jpg?tr=w-1200,pr-true",
  "https://images-static.nykaa.com/uploads/b004dea8-f276-48be-b74a-63f0a92276e4.gif?tr=w-1200,pr-true",
  "https://images-static.nykaa.com/uploads/a7252914-d1d6-4d86-b904-570c8a4a19b4.jpg?tr=w-1200,pr-true",
  "https://images-static.nykaa.com/uploads/71957402-12c5-45c8-ab01-596b10ccf0fe.jpg?tr=w-1200,pr-true",
  "https://images-static.nykaa.com/uploads/b17b80e5-429d-401a-905a-28cfb9dfbe3e.jpg?tr=w-1200,pr-true",
  "https://images-static.nykaa.com/uploads/279e5dd1-ec95-4026-807f-ec79570de599.jpg?tr=w-1200,pr-true",
  "https://images-static.nykaa.com/uploads/be6cfeb5-d5db-43cd-b47e-df36b17f4fd0.jpg?tr=w-1200,pr-true",
];

export const Slide = () => {
  const [img, setImg] = useState(0);
  useEffect(() => {
    const x = setInterval(() => {
      setImg(img === imgData.length - 1 ? 0 : img + 1);
    }, 3000);
    return () => clearInterval(x);
  }, [img]);

  return (
    <>
      <div className={styles.maincomp}>
        <div className={styles.circleOne}>
          <HiChevronLeft className={styles.leftLogo} />
        </div>
       <img src={imgData[img]} alt="blank" className={styles.slide} />
        <div className={styles.circleTwo}>
          <HiChevronRight className={styles.rightLogo} />
        </div>
      </div>
    </>
  );
};
