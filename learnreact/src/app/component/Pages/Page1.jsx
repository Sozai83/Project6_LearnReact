import { Link } from "react-router-dom";

export const Page1 = () => {
    return (
        <div>
            <h1>This is page1</h1>
            <Link to="/page1/page1detaila">Page1 DetailA</Link>
            <br />
            <Link to="/page1/page1detailb">Page1 DetailB</Link>
        </div>
    );
}