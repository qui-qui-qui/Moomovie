const NotFoundPage = () => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div data-testid="page-error" className="">
            <p>Something went wrong</p>
            <button className="" type="button" onClick={reloadPage}>
                Refresh page
            </button>
        </div>
    );
};

export { NotFoundPage };
