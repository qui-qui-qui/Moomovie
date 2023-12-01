import { useDispatch } from "react-redux";
import "./App.css";
import { init } from "./redux/actions/init";
import { ThemeWrapper } from "./providers/ThemeWrapper";

function App() {
    const dispatch = useDispatch();
    dispatch(init());
    return <ThemeWrapper />;
}

export { App };
