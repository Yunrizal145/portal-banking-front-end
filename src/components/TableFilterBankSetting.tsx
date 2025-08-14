import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilSquare } from "@fortawesome/free-solid-svg-icons";

interface BankData {
    bankCode: string;
    bankName: string;
    bankNameAlias: string;
    bankStatus: string;
}

const TableWithFilters: React.FC = () => {
    const [data, setData] = useState<BankData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [status, setStatus] = useState("");
    const [transferType, setTransferType] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Ambil data bank dari API
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(
                    "https://banking-tranhis-ms-3ef1e2f0039e.herokuapp.com/api/transactionhistorymanagementservice/getdatabank",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({}),
                    }
                );

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const result = await res.json();
                setData(result.bankTransactionDtos || []);
            } catch (err: any) {
                setError(err.message || "Gagal mengambil data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter data sesuai dropdown
    const filteredData = data.filter((item) => {
        const statusMatch =
            !status || item.bankStatus.toLowerCase() === status.toLowerCase();
        const transferMatch =
            !transferType || item.bankCode.startsWith(transferType);
        return statusMatch && transferMatch;
    });

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="w-full h-full p-4 bg-white rounded-md shadow">
            <div className="flex justify-end gap-4 p-6">
                <button className="flex items-center gap-2 text-white text-lg font-semibold px-6 py-2 rounded-lg bg-gradient-to-r from-[#537D24] via-[#73AB33] to-[#60B007] shadow hover:brightness-110 transition">
                    Tambah
                    <span className="text-2xl leading-none">+</span>
                </button>
            </div>

            {loading && <p className="p-4">Loading...</p>}
            {error && <p className="p-4 text-red-500">{error}</p>}

            {!loading && !error && (
                <div className="w-full p-8">
                    <table className="w-full border-collapse text-lg text-left table-auto rounded-xl overflow-hidden">
                        <thead className="bg-slate-100 rounded-lg border-b-2">
                            <tr>
                                <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                    Kode Bank
                                </th>
                                <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                    Nama Bank
                                </th>
                                <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                    Nama Alias
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
                                    <td className="p-4 px-8">
                                        {item.bankCode}
                                    </td>
                                    <td className="p-4 px-8">
                                        {item.bankName}
                                    </td>
                                    <td className="p-4 px-8">
                                        {item.bankNameAlias}
                                    </td>
                                    <td className="p-4 px-8">
                                        <span
                                            className={`px-3 py-1 text-sm font-semibold rounded-md ${
                                                item.bankStatus.toLowerCase() ===
                                                "aktif"
                                                    ? "bg-green-100 border border-green-500 text-green-500"
                                                    : "bg-red-100 border border-red-500 text-red-500"
                                            }`}
                                        >
                                            {item.bankStatus}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-center space-x-4">
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                className="text-red-500 cursor-pointer"
                                            />
                                            <FontAwesomeIcon
                                                icon={faPencilSquare}
                                                className="text-blue-500 cursor-pointer"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Pagination */}
            {!loading && !error && (
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
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                    >
                        {">"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default TableWithFilters;
