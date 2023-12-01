import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    const reloadPage = () => {
        navigate("/");
        window.location.reload();
    };

    return (
        <div
            data-testid="page-error"
            className="grid place-items-center pt-20 dark:bg-slate-400"
        >
            <p>Something went wrong</p>
            <button className="" type="button" onClick={reloadPage}>
                Main page
            </button>
        </div>
    );
};

export { NotFoundPage };
