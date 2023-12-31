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
import { page1Routes } from "./router/Page1Routes";
import {Page404} from "./component/Pages/Page404"


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
            {/* Having exact means that the path needs to match '/' otherwise, it can be rendered with /page1 as '/' exists */}
            <Route exact path="/" element={<Home1 />}></Route>
            {/* For any other path, it returns page 404 */}
            <Route path="*" element={<Page404 />}></Route>
        </Routes>
    </BrowserRouter>
  );
}
