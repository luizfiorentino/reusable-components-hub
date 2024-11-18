import React from "react";
import styles from "./index.module.css";
import Button from "../atoms/button";

export default function Pagination() {
  return (
    <div className={styles.paginationContainer}>
      <Button>Previous</Button>
      <Button>Next</Button>
    </div>
  );
}
