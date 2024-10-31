import React from "react";
import styles from "./index.module.css";

export default function Card() {
  const red = Math.ceil(Math.random() * 100);
  const green = Math.ceil(Math.random() * 100);
  const blue = Math.ceil(Math.random() * 100);
  //console.log(red, green, blue);
  return (
    <div
      style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      className={styles.cardContainer}
    ></div>
  );
}
