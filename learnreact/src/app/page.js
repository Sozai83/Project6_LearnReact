"use client";

import { useState, useCallback, useMemo } from "react";
import { InlineStyle } from "./component/InlineStyle";
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

  // Only re-caluculate when setOpen is used
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // Keep the fucntion as memo
  const temp = useMemo(() => 1 + 3, []);

  return (
    <main className={styles.main}>
      <InlineStyle />
    </main>
  );
}
