import React from "react";
import Sidebar from "../../components/Sidebar";
import SideProfile from "../../components/SideProfile";
import TableUserNasabah from "../../components/TableUserNasabah";

const DataNasabahMonitor = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="flex-1 p-14 ml-64 text-black relativ ">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="pb-4 text-5xl font-bold">
                            Data User Nasabah
                        </h1>
                    </div>
                    <SideProfile />
                </div>

                <div className="w-full h-[950px] bg-white rounded-2xl mt-20">
                    <TableUserNasabah />
                </div>
            </div>
        </div>
    );
};

export default DataNasabahMonitor;
