import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { localStorageUtils } from "../utils/localStorage";
import { getUserNameSelector } from "../redux/slices/authSlice";
import { HistoryRecord } from "../models/HistoryRecord";
import { Navbar } from "../components/Navbar";
function History() {
    const navigate = useNavigate();

    const user = useSelector(getUserNameSelector) || "";
    const searchHistory = localStorageUtils.getSearchHistory(user);

    return (
        <>
            <Navbar />
            <div className="grid place-items-center pt-10 bg-slate-50">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th scope="col">Date & Time</th>
                            <th scope="col">Query</th>
                            <th scope="col">Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchHistory?.map((historyRecord: HistoryRecord) => {
                            const { id, query, timestamp, queryResultLink } =
                                historyRecord;
                            return (
                                <tr key={id}>
                                    <td>{timestamp}</td>
                                    <td>{query}</td>
                                    <td>
                                        <button
                                            className=""
                                            onClick={() => {
                                                console.log(queryResultLink);
                                                navigate(`${queryResultLink}`);
                                            }}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export { History };
