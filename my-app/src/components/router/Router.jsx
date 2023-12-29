import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "../pages/Top"
import { Users } from "../pages/Users"
import { Default } from "../templates/Default"
import { HeaderOnly } from "../templates/HeaderOnly"

export const Router = () => {

    return (
        <BrowserRouter >
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Default><Top /></Default>}
                />
                <Route
                    path="/users"
                    element={<HeaderOnly><Users /></HeaderOnly>}
                />
            </Routes>
        </BrowserRouter >
    )
}