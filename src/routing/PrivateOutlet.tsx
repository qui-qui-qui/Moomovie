import { Navigate, Outlet } from "react-router-dom";
import { localStorageUtils } from "../utils/localStorage";

function PrivateOutlet() {
    const isAuth = localStorageUtils.getAuth();

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export { PrivateOutlet };
