import { Routes, Route } from "react-router-dom";
import { Page1 } from "../component/Pages/Page1";
import { Page2 } from "../component/Pages/Page2";
import { Home1 } from "../component/Pages/Home1";
import { Page1DetailA } from "../component/Pages/DetailedPages/Page1DetailA";
import { Page1DetailB } from "../component/Pages/DetailedPages/Page1DetailB";

const Router = () => {
    (
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
        </Routes>
    )
}

export default Router