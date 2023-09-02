"use client";

import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [inputValue, SetInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeInput = (e) => {
    SetInputValue(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <main className={styles.main}>
      <input value={inputValue} onChange={onChangeInput}></input>
      <br />
      <br />
      <button onClick={onClickOpen}>Show</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </main>
  );
}
