import { Link, useNavigate } from "react-router-dom";

export const page404 = () => {

    const navigate = useNavigate();

    const onClickBack = () => navigate("/");
    return (
        <div>
            <h1>Could not find the page</h1>
            <button onClick={onClickBack}>Back to top</button>
        </div>
    );
}