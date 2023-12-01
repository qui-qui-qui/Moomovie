import { Link } from "react-router-dom";
import {
    getAuthStatusSelector,
    getUserNameSelector,
    logOut,
} from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { localStorageUtils } from "../utils/localStorage";
import { clearHistory } from "../redux/slices/historySlice";
function Navbar() {
    const isAuth = useSelector(getAuthStatusSelector);
    const userName = useSelector(getUserNameSelector);
    const dispatch = useDispatch();

    const handleLogoutClick = () => {
        localStorageUtils.setAuth("");
        dispatch(logOut());
        dispatch(clearHistory());
    };

    return (
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                    <img
                        src="https://cdn4.iconfinder.com/data/icons/kitchen-vol-1/100/4-1024.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Cow Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap">
                        Moomovie
                    </span>
                </Link>
                {!isAuth ? (
                    <div className="flex items-center lg:order-2">
                        <Link
                            to={`/login`}
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to={`/signup`}
                            className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign up
                        </Link>
                    </div>
                ) : (
                    <div className="hidden sm:flex items-center sm:order-2 font-semibold">
                        Hello, {userName}
                    </div>
                )}

                {isAuth ? (
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <Link
                                    to="/history"
                                    className="block py-2 pr-4 pl-3 text-white rounded md-primary-700 md:bg-transparent md:text-primary-700 md:p-0"
                                >
                                    History
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/favorites"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0"
                                >
                                    Favourites
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={handleLogoutClick}
                                    to="/login"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0"
                                >
                                    Log out
                                </Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}

export { Navbar };
