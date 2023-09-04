"use client";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { useState, useCallback, useMemo } from "react";
import { InlineStyle } from "./component/InlineStyle";
import { CssModules } from "./component/CSSModules";
import Image from "next/image";
import styles from "./page.module.css";
import { Page1 } from "./component/Pages/Page1";
import { Page2 } from "./component/Pages/Page2";
import { Home1 } from "./component/Pages/Home1";
import { Page1DetailA } from "./component/Pages/DetailedPages/Page1DetailA";
import { Page1DetailB } from "./component/Pages/DetailedPages/Page1DetailB";

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
    <BrowserRouter>
      <main className={styles.main}>
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </main>
      <Routes>
        <Route path="/page1">
          <Route index={true} element={<Page1 />}></Route>
          <Route
            index={false}
            path="page1detaila"
            element={<Page1DetailA />}
          ></Route>
          <Route
            index={false}
            path="page1detailb"
            element={<Page1DetailB />}
          ></Route>
        </Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route exact path="/" element={<Home1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
