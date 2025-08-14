import React from "react";
// import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SideProfile from "../components/SideProfile";

const Dashboard = () => {
    // const navigate = useNavigate();

    // const homeNavigate = () => {
    //     navigate("/");
    // };

    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="flex-1 p-14 ml-64 text-black relativ ">
                {/* Top bar dengan foto profil */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="pb-4 text-[#537D24] text-5xl font-bold">
                            Dashboard
                        </h1>
                        <p className="text-lg">
                            Selamat Pagi🖐️, Hammad Yunrizal Aushaf
                        </p>
                    </div>
                    <SideProfile />
                </div>

                <div className="w-full h-[950px] bg-white rounded-2xl mt-20 text-center">
                    <div className="text-5xl p-16 font-bold text-[#537D24]">
                        Selamat Datang di Web Portal Banking Finance
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
