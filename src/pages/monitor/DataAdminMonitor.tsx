import Sidebar from "../../components/Sidebar";
import SideProfile from "../../components/SideProfile";
import TableUserAdmin from "../../components/TableUserAdmin";

const DataAdminMonitor = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="flex-1 p-14 ml-64 text-black relativ ">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="pb-4 text-5xl font-bold">
                            Data User Admin
                        </h1>
                    </div>
                    <SideProfile />
                </div>

                <div className="w-full h-[950px] bg-white rounded-2xl mt-20">
                    <TableUserAdmin />
                </div>
            </div>
        </div>
    );
};

export default DataAdminMonitor;
