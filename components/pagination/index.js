import React, { useState } from "react";
import styles from "./index.module.css";
import Button from "../atoms/button";
import Card from "../card";

export default function Pagination({ arrayOfCards, cardsPerPage }) {
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  cardsPerPage = 10;

  const arrayOfNumbers = [];
  for (let i = 1; i <= 91; i++) {
    arrayOfNumbers.push(i);
  }
  console.log(arrayOfNumbers);
  const totalCards = arrayOfNumbers.length;
  const numberOfButtons = Math.ceil(arrayOfNumbers.length / cardsPerPage);
  console.log(numberOfButtons);

  const blavariable = (paginationIndex - 1) * cardsPerPage;
  console.log("blavariable", blavariable);

  const previousList = () => setPaginationIndex(paginationIndex - 1);
  const nextList = () => setPaginationIndex(paginationIndex + 1);
  console.log("paginationIndex", paginationIndex);

  return (
    <div>
      {" "}
      <div className={styles.paginationContainer}>
        <Button onClick={() => previousList()}>Previous</Button>
        <Button onClick={() => nextList()}>Next</Button>
      </div>
      <div className={styles.listOfCardsContainer}>
        {arrayOfNumbers
          .slice(blavariable, blavariable + 10)
          .map((el, index) => (
            <div className={styles.cardContainer}>
              {" "}
              <Card>{el}</Card>
            </div>
          ))}
      </div>
    </div>
  );
}
