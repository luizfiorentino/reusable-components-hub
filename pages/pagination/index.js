import React from "react";
import styles from "./index.module.css";
import Pagination from "@/components/pagination";

export default function index() {
  const arrayOfCards = [];
  for (let i = 1; i <= 149; i++) {
    arrayOfCards.push(i);
  }
  return (
    <div>
      <Pagination arrayOfCards={arrayOfCards} cardsPerPage={10} />
    </div>
  );
}
