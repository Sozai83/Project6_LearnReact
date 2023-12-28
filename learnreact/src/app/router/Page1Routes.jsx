import { Page1 } from "../component/Pages/Page1";
import { Page1DetailA } from "../component/Pages/DetailedPages/Page1DetailA";
import { Page1DetailB } from "../component/Pages/DetailedPages/Page1DetailB";

export const page1Routes = [
    {
        path: "/page1",
        exact: true,
        children: <Page1 />
    },
    {
        path: "page1/page1detaila",
        exact: false,
        children: <Page1DetailA />
    },
    {
        path: "page1/page1detailb",
        exact: false,
        children: <Page1DetailB />
    },
]