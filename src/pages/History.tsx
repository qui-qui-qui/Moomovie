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
            <div className="h-screen grid place-items-center bg-slate-50 px-4 dark:bg-slate-400">
                <table className="w-80 text-sm text-left rtl:text-right text-gray-500 table-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Date & Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Query
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Results
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchHistory?.map((historyRecord: HistoryRecord) => {
                            const { id, query, timestamp, queryResultLink } =
                                historyRecord;
                            return (
                                <tr key={id} className="bg-white border-b">
                                    <td className="px-6 py-4">{timestamp}</td>
                                    <td className="px-6 py-4">{query}</td>
                                    <td className="px-6 py-4">
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
