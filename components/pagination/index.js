import React, { useState } from "react";
import styles from "./index.module.css";
import Button from "../atoms/button";
import Card from "../card";
import LabelMedium from "../atoms/LabelMedium/LabelMedium";

export default function Pagination({
  label,
  arrayOfCards,
  cardsPerPage = 5,
  buttonsPerPage = 5,
}) {
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [subPaginationIndex, setSubPaginationIndex] = useState(1);

  const numberOfButtons = Math.ceil(arrayOfCards.length / cardsPerPage);
  const arrowButtons =
    buttonsPerPage * cardsPerPage < arrayOfCards.length ? true : false;

  const startSet = (paginationIndex - 1) * cardsPerPage;
  const endSet = startSet + cardsPerPage;

  const startSet2 = (subPaginationIndex - 1) * buttonsPerPage;
  const endSet2 = startSet2 + buttonsPerPage;

  const previousList = () => {
    if ((paginationIndex - 1) % buttonsPerPage === 0) {
      setSubPaginationIndex(subPaginationIndex - 1);
    }
    setPaginationIndex(paginationIndex - 1);
  };
  const nextList = () => {
    if (paginationIndex % buttonsPerPage === 0) {
      setSubPaginationIndex(subPaginationIndex + 1);
    }
    setPaginationIndex(paginationIndex + 1);
  };

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
  const lastButton = paginationButtons.length;
  const subPaginationLastIndex = Math.ceil(
    paginationButtons.length / buttonsPerPage
  );

  const displayInset = (index) => {
    setPaginationIndex(index + 1);
  };

  const goToFirstList = () => {
    setPaginationIndex(1);
    setSubPaginationIndex(1);
  };
  const goToLastList = () => {
    setPaginationIndex(lastButton);
    setSubPaginationIndex(subPaginationLastIndex);
  };

  return (
    <div className={styles.componentContainer}>
      {label && <LabelMedium>{label}</LabelMedium>}
      <div className={styles.listOfCardsContainer}>
        {arrayOfCards.slice(startSet, endSet).map((el, index) => (
          <div key={index} className={styles.cardContainer}>
            <Card>{el}</Card>
          </div>
        ))}
      </div>

      <div className={styles.paginationContainer}>
        <div className={styles.paginationContainerTop}>
          {arrowButtons && (
            <Button
              variant="thumbnail"
              onClick={() => goToFirstList()}
              disabled={paginationIndex === 1 ? true : false}
            >
              &laquo;
            </Button>
          )}
          {arrowButtons && (
            <Button
              variant="thumbnail"
              onClick={() => previousSubList()}
              disabled={subPaginationIndex === 1 ? true : false}
            >
              &lsaquo;
            </Button>
          )}

          {paginationButtons.length &&
            paginationButtons.slice(startSet2, endSet2).map((button, index) => (
              <Button
                key={index}
                variant="thumbnail"
                onClick={() => displayInset(button)}
                selected={button === paginationIndex - 1 ? true : false}
              >
                {button + 1}
              </Button>
            ))}

          {arrowButtons && (
            <Button
              variant="thumbnail"
              onClick={() => nextSubList()}
              disabled={
                subPaginationIndex === subPaginationLastIndex ? true : false
              }
            >
              &rsaquo;
            </Button>
          )}
          {arrowButtons && (
            <Button
              variant="thumbnail"
              onClick={() => goToLastList()}
              disabled={paginationIndex === lastButton ? true : false}
            >
              &raquo;
            </Button>
          )}
        </div>
        <div className={styles.paginationContainerBottom}>
          <Button
            variant="thumbnail"
            onClick={() => previousList()}
            disabled={paginationIndex === 1 ? true : false}
          >
            Previous
          </Button>
          <Button
            variant="thumbnail"
            onClick={() => nextList()}
            disabled={
              paginationIndex === paginationButtons.length ? true : false
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
