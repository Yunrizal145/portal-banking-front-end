import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo 1.png";
import Home from "../assets/Home.png";
import HomeW from "../assets/Home-w.png";
import Setting from "../assets/Setting.png";
import SettingW from "../assets/Setting-w.png";
import Monitor from "../assets/Monitor.png";
import MonitorW from "../assets/Monitor-w.png";

const Sidebar: React.FC = () => {
    const [isHoverDashboard, setIsHoverDashboard] = useState(false);
    const [isHoverSetting, setIsHoverSetting] = useState(false);
    const [isHoverMonitor, setIsHoverMonitor] = useState(false);
    const [isMyAccountOpen, setIsMyAccountOpen] = useState(false);
    const [isTransferOpen, setIsTransferOpen] = useState(false);

    return (
        <div className="w-64 bg-white h-screen border-l border-gray-200 overflow-hidden fixed left-0 top-0">
            <div className="py-6 justify-items-center">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-16 transition-all duration-700 ease-in-out"
                />
            </div>
            <div className="h-[2px] mb-10 mx-4 bg-slate-300"></div>
            <div className="px-6">
                <ul className="space-y-4">
                    {/* Dashboard */}
                    <li>
                        <Link
                            to="/dashboard"
                            className={
                                isHoverDashboard
                                    ? "flex items-center p-2 space-x-2 rounded-2xl overflow-hidden text-gray-700 bg-white"
                                    : "flex items-center p-2 space-x-2 overflow-hidden text-white rounded-lg bg-gradient-to-r from-[#537D24] via-[#73AB33] to-[#60B007] shadow hover:brightness-110 transition"
                            }
                            onMouseEnter={() => setIsHoverDashboard(false)}
                            onMouseLeave={() => setIsHoverDashboard(true)}
                        >
                            <img
                                src={isHoverDashboard ? Home : HomeW}
                                alt="Dashboard"
                                className="p-2"
                            />
                            <span className="text-lg">Dashboard</span>
                        </Link>
                    </li>

                    {/* Pengaturan */}
                    <li>
                        <div
                            className={
                                isHoverSetting
                                    ? "flex justify-between items-center p-2 rounded-2xl overflow-hidden text-gray-700 cursor-pointer"
                                    : "flex justify-between items-center p-2 overflow-hidden cursor-pointer text-white rounded-lg bg-gradient-to-r from-[#537D24] via-[#73AB33] to-[#60B007] shadow hover:brightness-110 transition"
                            }
                            onMouseEnter={() => setIsHoverSetting(false)}
                            onMouseLeave={() => setIsHoverSetting(true)}
                            onClick={() => setIsMyAccountOpen(!isMyAccountOpen)}
                        >
                            <div className="flex items-center space-x-2">
                                <img
                                    src={isHoverSetting ? Setting : SettingW}
                                    alt="Setting"
                                    className="p-2"
                                />
                                <span className="text-lg">Pengaturan</span>
                            </div>
                            <svg
                                className={`w-4 h-4 ${
                                    isMyAccountOpen
                                        ? "transform rotate-180 duration-500"
                                        : "duration-500"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        {isMyAccountOpen && (
                            <ul className="ml-6 mt-2 space-y-4">
                                <li>
                                    <Link
                                        to="/setting/bank"
                                        className="text-gray-600 px-4 py-2 hover:bg-[#537D24] hover:text-white hover: rounded-2xl"
                                    >
                                        Bank
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/setting/limit"
                                        className="text-gray-600 px-4 py-2 hover:bg-[#537D24] hover:text-white hover: rounded-2xl"
                                    >
                                        Limit
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/setting/fee"
                                        className="text-gray-600 px-4 py-2 hover:bg-[#537D24] hover:text-white hover: rounded-2xl"
                                    >
                                        Biaya Transfer
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Monitor */}
                    <li>
                        <div
                            className={
                                isHoverMonitor
                                    ? "flex justify-between items-center p-2 rounded-2xl overflow-hidden text-gray-700 cursor-pointer "
                                    : "flex justify-between items-center p-2 overflow-hidden cursor-pointer text-white rounded-lg bg-gradient-to-r from-[#537D24] via-[#73AB33] to-[#60B007] shadow hover:brightness-110 transition"
                            }
                            onMouseEnter={() => setIsHoverMonitor(false)}
                            onMouseLeave={() => setIsHoverMonitor(true)}
                            onClick={() => setIsTransferOpen(!isTransferOpen)}
                        >
                            <div className="flex items-center space-x-2">
                                <img
                                    src={isHoverMonitor ? Monitor : MonitorW}
                                    alt="Monitor"
                                    className="p-2"
                                />
                                <span className="text-lg">Monitor</span>
                            </div>
                            <svg
                                className={`w-4 h-4 ${
                                    isTransferOpen
                                        ? "transform rotate-180 duration-500"
                                        : "duration-500"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        {isTransferOpen && (
                            <ul className="ml-6 mt-2 space-y-4 ">
                                {/* <li>
                                    <Link
                                        to="/list-login/nasabah"
                                        className="text-gray-600 px-4 py-2 hover:bg-[#537D24] hover:text-white hover: rounded-2xl"
                                    >
                                        Sesi Login Nasabah
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/list-login/admin"
                                        className="text-gray-600 px-4 py-2 hover:bg-[#537D24] hover:text-white hover: rounded-2xl"
                                    >
                                        Sesi Login Admin
                                    </Link>
                                </li> */}
                                <li>
                                    <Link
                                        to="/list-user/nasabah"
                                        className="text-gray-600 px-4 py-2 hover:bg-[#537D24] hover:text-white hover: rounded-2xl"
                                    >
                                        Data User Nasabah
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/list-user/admin"
                                        className="text-gray-600 px-4 py-2 hover:bg-[#537D24] hover:text-white hover: rounded-2xl"
                                    >
                                        Data User Admin
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>

            {/* Bottom Button */}
            {/* <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                <button className="bg-red-500 text-white p-2 rounded-full">
                    <i className="fas fa-cogs"></i>
                </button>
            </div> */}
        </div>
    );
};

export default Sidebar;
