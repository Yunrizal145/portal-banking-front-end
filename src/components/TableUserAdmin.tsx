import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TableUserAdmin = () => {
    const [transferType, setTransferType] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const allData = [
        // Simulasi data: isi dengan array objek real Anda
        {
            username: "HammadAdmin",
            nasabahName: "Hammad",
            email: "hammad@gmail.com",
            phone: "0895404630001",
            status: "Aktif",
        },
        {
            username: "Yunrizal27Admin",
            nasabahName: "Rizal",
            email: "rizal@gmail.com",
            phone: "0895404630001",
            status: "Tidak Aktif",
        },
    ];

    const filteredData = allData.filter((item) => {
        const transferMatch = item.username.startsWith(transferType);
        return transferMatch;
    });

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="w-full h-full p-4 bg-white rounded-md shadow">
            {/* Tabel */}
            <div className="w-full p-8">
                <table className="w-full border-collapse text-lg  text-left table-auto rounded-xl overflow-hidden">
                    <thead className="bg-slate-100 rounded-lg border-b-2 ">
                        <tr>
                            <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                Username
                            </th>
                            <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                Nama Admin
                            </th>
                            <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                Email
                            </th>
                            <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                No. Telepon
                            </th>
                            <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                Status
                            </th>
                            <th className="p-4 px-8 font-medium"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((item, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 border-b"
                            >
                                <td className="p-4 px-8">{item.username}</td>
                                <td className="p-4 px-8">{item.nasabahName}</td>
                                <td className="p-4 px-8">{item.email}</td>
                                <td className="p-4 px-8">{item.phone}</td>
                                <td className="p-4 px-8">
                                    <span
                                        className={`px-3 py-1 text-sm font-semibold rounded-md ${
                                            item.status === "Aktif"
                                                ? "bg-green-100 border border-green-500 text-green-500"
                                                : "bg-red-100 border border-red-500 text-red-500"
                                        }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center justify-center space-x-4">
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            className="text-red-500 cursor-pointer"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end items-center mt-4 gap-2">
                <button
                    className="px-3 py-1 border rounded disabled:opacity-50"
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                >
                    {"<"}
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={`px-3 py-1 border rounded ${
                            currentPage === i + 1
                                ? "bg-blue-500 text-white"
                                : ""
                        }`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="px-3 py-1 border rounded disabled:opacity-50"
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default TableUserAdmin;
