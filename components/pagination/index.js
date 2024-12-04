import React, { useState } from "react";
import styles from "./index.module.css";
import Button from "../atoms/button";
import Card from "../card";

export default function Pagination({ arrayOfCards, cardsPerPage }) {
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  cardsPerPage = 10;

  const arrayOfNumbers = [];
  for (let i = 1; i <= 101; i++) {
    arrayOfNumbers.push(i);
  }
  console.log(arrayOfNumbers);
  const totalCards = arrayOfNumbers.length;
  const numberOfButtons = Math.ceil(arrayOfNumbers.length / cardsPerPage);
  console.log(numberOfButtons);

  const startSet = (paginationIndex - 1) * cardsPerPage;
  const endSet = startSet + 10;
  console.log("startSet", startSet);

  const previousList = () => setPaginationIndex(paginationIndex - 1);
  const nextList = () => setPaginationIndex(paginationIndex + 1);
  console.log("paginationIndex", paginationIndex);

  const paginationButtons = [];
  for (let i = 0; i < numberOfButtons; i++) {
    paginationButtons.push({ index: i });
  }
  console.log("paginationButtons", paginationButtons[0]["index"]);

  const displayInset = (index) => {
    setPaginationIndex(index + 1);
    console.log("clicked", index);
  };

  return (
    <div>
      <div className={styles.paginationContainer}>
        <Button onClick={() => previousList()}>Previous</Button>
        <Button onClick={() => nextList()}>Next</Button>
      </div>
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
      <div className={styles.listOfCardsContainer}>
        {arrayOfNumbers.slice(startSet, endSet).map((el, index) => (
          <div className={styles.cardContainer}>
            <Card>{el}</Card>
          </div>
        ))}
      </div>
    </div>
  );
}
