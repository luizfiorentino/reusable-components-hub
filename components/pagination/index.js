import React, { useState } from "react";
import styles from "./index.module.css";
import Button from "../atoms/button";
import Card from "../card";

export default function Pagination({ arrayOfCards, cardsPerPage }) {
  const [paginationIndex, setPaginationIndex] = useState(1);

  const arrayOfNumbers = [];
  for (let i = 1; i <= 100; i++) {
    arrayOfNumbers.push(i);
  }
  console.log(arrayOfNumbers);
  const totalCards = arrayOfNumbers.length;
  return (
    <div>
      {arrayOfNumbers.map((el, index) => (
        <Card>{el}</Card>
      ))}
      <div className={styles.paginationContainer}>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
}
