import HomeRouteWrapper from "components/HomeRouteWrapper";
import Fundadora from "pages/Home/Fundadora";
import QuemSomos from "pages/Home/QuemSomos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ValidateToken from "utils/validateToken";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ValidateToken />
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomeRouteWrapper>
                            <Home />
                        </HomeRouteWrapper>
                    }
                />
                <Route element={<SignIn />} path="signin" />
                <Route element={<SignUp />} path="signup" />
                <Route
                    element={
                        <HomeRouteWrapper>
                            <QuemSomos />
                        </HomeRouteWrapper>
                    }
                    path="quem-somos"
                />
                <Route
                    element={
                        <HomeRouteWrapper>
                            <Fundadora />
                        </HomeRouteWrapper>
                    }
                    path="fundadora"
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
