import { useDispatch } from "react-redux";
import "./App.css";
import AuthProvider from "./providers/AuthProvider";
import { init } from "./redux/actions/init";

function App() {
    const dispatch = useDispatch();
    dispatch(init());
    return <AuthProvider />;
}

export { App };
