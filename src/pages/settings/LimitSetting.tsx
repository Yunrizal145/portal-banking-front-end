import Sidebar from "../../components/Sidebar";
import SideProfile from "../../components/SideProfile";
import TableLimitSetting from "../../components/TableLimitSetting";

const LimitSetting = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="flex-1 p-14 ml-64 text-black relativ ">
                {/* Top bar dengan foto profil */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="pb-4 text-5xl font-bold">
                            Pengaturan Limit
                        </h1>
                    </div>

                    <SideProfile />
                </div>

                <div className="w-full h-[950px] bg-white rounded-xl mt-20">
                    <TableLimitSetting />
                </div>
            </div>
        </div>
    );
};

export default LimitSetting;
