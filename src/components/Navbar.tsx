import { Link } from "react-router-dom";
import {
    getAuthStatusSelector,
    getUserNameSelector,
    logOut,
} from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { localStorageUtils } from "../utils/localStorage";
import { clearHistory } from "../redux/slices/historySlice";
import { ThemeSwitch } from "./ThemeSwitch";
function Navbar() {
    const isAuth = useSelector(getAuthStatusSelector);
    const userName = useSelector(getUserNameSelector);
    const dispatch = useDispatch();

    const handleLogoutClick = () => {
        dispatch(clearHistory());
        localStorageUtils.setAuth("");
        dispatch(logOut());
    };

    return (
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                    <img
                        src="https://cdn4.iconfinder.com/data/icons/kitchen-vol-1/100/4-1024.png"
                        className="mr-3 h-6 sm:h-9 dark:bg-white dark:rounded-lg"
                        alt="Cow Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Moomovie
                    </span>
                </Link>
                {!isAuth ? (
                    <div className="flex items-center lg:order-2">
                        <Link
                            to={`/login`}
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Log in
                        </Link>
                        <Link
                            to={`/signup`}
                            className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                        >
                            Sign up
                        </Link>
                    </div>
                ) : (
                    <div className="">
                        <div className="hidden sm:flex items-center sm:order-1 font-semibold dark:text-white">
                            Hello, {userName}
                        </div>
                    </div>
                )}

                {isAuth ? (
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                        <ThemeSwitch />
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            <li className="">
                                <Link
                                    to="/history"
                                    className="block py-2 pr-4 pl-3 text-white rounded md-primary-700 md:bg-transparent md:text-primary-700 md:p-0 dark:text-white"
                                >
                                    History
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/favorites"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Favourites
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={handleLogoutClick}
                                    to="/login"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
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
