'use client';

import { BrowserRouter, Link } from "react-router-dom";
import Router from './router/Router'
import { useState, useCallback, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
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
      <main>
        <Link to="/">Home</Link><br/>
        <Link to="/page1">Page 1</Link><br/>
        <Link to="/page2">Page 2</Link>
      </main>
      <Routes>
            {/* <Route path="/page1" render={()=>(
          <Routes>
            <Route path="/page1" element={<Page1 />}/>
            <Route
            path="page1/page1detaila"
            element={<Page1DetailA />}/>
            <Route
              path="page1/page1detailb"
              element={<Page1DetailB />}/>
          </Routes>          
        )}>
        </Route> */}
            <Router/>
        </Routes>
    </BrowserRouter>
  );
}
