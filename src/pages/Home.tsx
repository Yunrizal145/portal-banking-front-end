import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Home = () => {
    const navigate = useNavigate();

    const dashboardNavigate = () => {
        navigate("/dashboard");
    };

    const loginNavigate = () => {
        navigate("/login");
    };

    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className=" flex-1 bg-green-500 p-6 ml-64">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Selamat Datang di Portal Banking
                </h1>
                <h1>Welcome to pages Home</h1>
                <button
                    onClick={dashboardNavigate}
                    className="bg-sky-500 hover:bg-sky-700"
                >
                    Go to dashboard page
                </button>
                <br />
                <br />
                <button
                    onClick={loginNavigate}
                    className="bg-sky-500 hover:bg-sky-700"
                >
                    Go to login page
                </button>
            </div>
        </div>
    );
};

export default Home;
