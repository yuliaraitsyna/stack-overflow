import { Route } from "react-router-dom";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";

export const routes = [
    <Route path="/" element={null} />,
    <Route path="/login" element={<LoginPage />} />,
    <Route path="/register" element={<RegisterPage />} />,
]