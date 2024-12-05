import React from "react";
import styles from "./index.module.css";
import Pagination from "@/components/pagination";

export default function index() {
  const arrayOfCards = [];
  for (let i = 1; i <= 61; i++) {
    arrayOfCards.push(i);
  }
  return (
    <div className={styles.pageContainer}>
      <Pagination
        label="Results for cards"
        arrayOfCards={arrayOfCards}
        cardsPerPage={10}
        buttonsPerPage={5}
      />
    </div>
  );
}
