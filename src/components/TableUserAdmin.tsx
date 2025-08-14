import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface UserProfile {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    role: string;
    userStatus: string;
}

const TableUserNasabah: React.FC = () => {
    const [transferType, _setTransferType] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [allData, setAllData] = useState<UserProfile[]>([]);
    const itemsPerPage = 10;

    // Fetch data dari BE
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    "https://banking-user-ms-11747f2431fa.herokuapp.com/api/usermanagementservice/getlistuserdata",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ role: "ADMIN" }),
                    }
                );

                console.log("Status API:", response.status);

                if (!response.ok) {
                    throw new Error("Gagal fetch data user");
                }

                const data = await response.json();
                console.log("Response API:", data);

                setAllData(data.userProfileList || []);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUsers();
    }, []);

    // Filter username sesuai input search
    const filteredData = allData.filter((item) => {
        const transferMatch = item.fullName
            ?.toLowerCase()
            .startsWith(transferType.toLowerCase());
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
                <table className="w-full border-collapse text-lg text-left table-auto rounded-xl overflow-hidden">
                    <thead className="bg-slate-100 rounded-lg border-b-2">
                        <tr>
                            <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                Nama Lengkap
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
                        {paginatedData.length > 0 ? (
                            paginatedData.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50 border-b"
                                >
                                    <td className="p-4 px-8">
                                        {item.fullName}
                                    </td>
                                    <td className="p-4 px-8">{item.email}</td>
                                    <td className="p-4 px-8">
                                        {item.phoneNumber}
                                    </td>
                                    <td className="p-4 px-8">
                                        <span
                                            className={`px-3 py-1 text-sm font-semibold rounded-md ${
                                                item.userStatus === "ACTIVE"
                                                    ? "bg-green-100 border border-green-500 text-green-500"
                                                    : "bg-red-100 border border-red-500 text-red-500"
                                            }`}
                                        >
                                            {item.userStatus === "ACTIVE"
                                                ? "Aktif"
                                                : "Tidak Aktif"}
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
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="text-center p-4 text-slate-500"
                                >
                                    Tidak ada data
                                </td>
                            </tr>
                        )}
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

export default TableUserNasabah;
