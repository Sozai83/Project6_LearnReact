import { Link, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {

    const navigate = useNavigate();

    const onClickBack = () => navigate("/page1");
    return (
        <div>
            <h1>This is Page1DetailA</h1>
            <button onClick={onClickBack}>Back</button>
        </div>
    );
}