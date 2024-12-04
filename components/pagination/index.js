import React, { useState } from "react";
import styles from "./index.module.css";
import Button from "../atoms/button";
import Card from "../card";

export default function Pagination({
  arrayOfCards,
  cardsPerPage,
  buttonsPerPage = 5,
}) {
  console.log(arrayOfCards.length);
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [subPaginationIndex, setSubPaginationIndex] = useState(1);

  const numberOfButtons = Math.ceil(arrayOfCards.length / cardsPerPage);

  const startSet = (paginationIndex - 1) * cardsPerPage;
  const endSet = startSet + 10;

  const startSet2 = (subPaginationIndex - 1) * buttonsPerPage;
  const endSet2 = startSet2 + 5;

  const previousList = () => setPaginationIndex(paginationIndex - 1);
  const nextList = () => setPaginationIndex(paginationIndex + 1);

  const previousSubList = () => {
    setPaginationIndex(
      subPaginationIndex === 2
        ? 1
        : (subPaginationIndex - 2) * buttonsPerPage + 1
    );
    setSubPaginationIndex(subPaginationIndex - 1);
  };
  const nextSubList = () => {
    setPaginationIndex(subPaginationIndex * buttonsPerPage + 1);
    setSubPaginationIndex(subPaginationIndex + 1);
  };

  const paginationButtons = [];
  for (let i = 0; i < numberOfButtons; i++) {
    paginationButtons.push(i);
  }
  const subPaginationLastIndex = Math.ceil(
    paginationButtons.length / buttonsPerPage
  );

  const displayInset = (index) => {
    setPaginationIndex(index + 1);
  };

  return (
    <div>
      <div className={styles.listOfCardsContainer}>
        {arrayOfCards.slice(startSet, endSet).map((el, index) => (
          <div className={styles.cardContainer}>
            <Card>{el}</Card>
          </div>
        ))}
      </div>
      <div className={styles.paginationContainer}>
        {paginationButtons.length &&
          paginationButtons.slice(startSet2, endSet2).map((button, index) => (
            <Button
              onClick={() => displayInset(button)}
              selected={button === paginationIndex - 1 ? true : false}
            >
              {button + 1}
            </Button>
          ))}
      </div>
      <div className={styles.paginationContainer}>
        <Button
          onClick={() => previousSubList()}
          disabled={subPaginationIndex === 1 ? true : false}
        >
          {"<<"}
        </Button>
        <Button
          onClick={() => nextSubList()}
          disabled={
            subPaginationIndex === subPaginationLastIndex ? true : false
          }
        >
          {">>"}
        </Button>
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
    </div>
  );
}
