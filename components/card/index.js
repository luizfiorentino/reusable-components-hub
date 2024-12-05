import React from "react";
import styles from "./index.module.css";

export default function Card({ children }) {
  const red = Math.ceil(Math.random() * 100);
  const green = Math.ceil(Math.random() * 100);
  const blue = Math.ceil(Math.random() * 100);
  //console.log(red, green, blue);

  const randomNumber = Math.ceil(Math.random() * 1000);

  const testImage = `https://picsum.photos/300/300?random=${randomNumber}`;

  return (
    <div
      style={{
        // backgroundImage: `url(${randomImage})`,
        backgroundImage: `url(${testImage})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`${styles.cardContainer} `}
    >
      <div className={styles.cardNumberArea}>{children}</div>
    </div>
  );
}
