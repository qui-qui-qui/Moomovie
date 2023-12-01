import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLogIn } from "../redux/services/authService";
function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { changeAuth } = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [invalidLogin, setInvalidLogin] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
        if (invalidLogin) {
            setInvalidLogin(false);
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        if (invalidPassword) {
            setInvalidPassword(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userInfo = { userName, password };
        const authResult = handleLogIn({ navigate, dispatch }, userInfo);
        setInvalidLogin(authResult.invalidLogin);
        setInvalidPassword(authResult.invalidPassword);
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-20 w-auto"
                    src="https://cdn4.iconfinder.com/data/icons/kitchen-vol-1/100/4-1024.png"
                    alt="Moomovie"
                />
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="userName"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="userName"
                                name="userName"
                                type="text"
                                value={userName}
                                onChange={handleUserNameChange}
                                required
                                className="px-2 py-3 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={handlePasswordChange}
                                className="px-2 py-3 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {invalidLogin && (
                        <div className="text-red">
                            User was not found. Please, try again.
                        </div>
                    )}
                    {invalidPassword && (
                        <div className="text-red">
                            Wrong password. Please, try again.
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className=" flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a user?{` `}
                    <Link
                        to={`/signup`}
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export { LoginForm };
