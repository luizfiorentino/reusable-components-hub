import React, { useState } from "react";
import styles from "./index.module.css";
import Button from "../atoms/button";
import Card from "../card";

export default function Pagination({ arrayOfCards, cardsPerPage }) {
  const [paginationIndex, setPaginationIndex] = useState(1);

  const numberOfButtons = Math.ceil(arrayOfCards.length / cardsPerPage);

  const startSet = (paginationIndex - 1) * cardsPerPage;
  const endSet = startSet + 10;

  const previousList = () => setPaginationIndex(paginationIndex - 1);
  const nextList = () => setPaginationIndex(paginationIndex + 1);

  const paginationButtons = [];
  for (let i = 0; i < numberOfButtons; i++) {
    paginationButtons.push(i);
  }

  const displayInset = (index) => {
    setPaginationIndex(index + 1);
  };
  console.log(paginationIndex);

  return (
    <div>
      <div className={styles.paginationContainer}>
        {paginationButtons.length &&
          paginationButtons.map((button, index) => (
            <Button
              onClick={() => displayInset(index)}
              selected={index === paginationIndex - 1 ? true : false}
            >
              {index + 1}
            </Button>
          ))}
      </div>
      <div className={styles.paginationContainer}>
        <Button
          onClick={() => previousList()}
          disabled={paginationIndex === 1 ? true : false}
        >
          Previous
        </Button>
        <Button
          onClick={() => nextList()}
          disabled={paginationIndex === paginationButtons.length ? true : false}
        >
          Next
        </Button>
      </div>
      <div className={styles.listOfCardsContainer}>
        {arrayOfCards.slice(startSet, endSet).map((el, index) => (
          <div className={styles.cardContainer}>
            <Card>{el}</Card>
          </div>
        ))}
      </div>
    </div>
  );
}
