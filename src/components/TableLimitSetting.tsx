import { useState } from "react";

interface LimitTransaction {
    id: number;
    userProfileId: number;
    transactionCategory: "SESAMA_BANK" | "ANTAR_BANK";
    minAmountTransaction: number;
    maxAmountTransaction: number;
    maxAmountTransactionOfDay: number;
    maxTransactionTotal: number;
    transactionFee: number;
    limitFee: number;
}

const TableLimitSetting = () => {
    const [username, setUsername] = useState("");
    const [isUserFound, setIsUserFound] = useState<boolean | null>(null);
    const [showTable, setShowTable] = useState(false);
    const [limitData, setLimitData] = useState<LimitTransaction[]>([]);

    const handleSearchUser = async () => {
        try {
            // Nanti logika pencarian user bisa diganti sesuai kebutuhan
            if (username.trim() === "") {
                setIsUserFound(false);
                setShowTable(false);
                return;
            }

            const res = await fetch(
                "https://banking-tranhis-ms-3ef1e2f0039e.herokuapp.com/api/transactionhistorymanagementservice/getlimittransaction",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ userProfileId: 2 }),
                }
            );

            if (!res.ok) throw new Error("Gagal fetch data");

            const data = await res.json();
            if (
                data.limitTransactionDto &&
                data.limitTransactionDto.length > 0
            ) {
                setLimitData(data.limitTransactionDto);
                setIsUserFound(true);
                setShowTable(true);
            } else {
                setIsUserFound(false);
                setShowTable(false);
            }
        } catch (error) {
            console.error(error);
            setIsUserFound(false);
            setShowTable(false);
        }
    };

    // Helper ambil data sesuai kategori
    const getByCategory = (category: "SESAMA_BANK" | "ANTAR_BANK") =>
        limitData.find((item) => item.transactionCategory === category);

    return (
        <div className="w-full p-14">
            {/* Kolom Cari User */}
            <div className="mb-6">
                <label className="block text-lg font-medium mb-2">
                    Cari User:
                </label>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Masukkan username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={`border-2 rounded-lg px-4 py-2 w-80 focus:outline-none ${
                            isUserFound === false
                                ? "border-red-500"
                                : "border-slate-300"
                        }`}
                    />
                    <button
                        onClick={handleSearchUser}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Cari
                    </button>
                </div>
                {isUserFound === false && (
                    <p className="text-red-500 mt-2">User tidak ditemukan!</p>
                )}
            </div>

            {/* Table hanya muncul jika user ditemukan */}
            {showTable && (
                <>
                    {/* Minimal Transaksi */}
                    <div className="w-full border-b-2 text-2xl border-slate-300 pb-4">
                        <span>Minimal Transaksi</span>
                    </div>
                    <div className="w-full py-10">
                        <table className="w-full border-collapse text-lg text-left table-auto rounded-xl overflow-hidden">
                            <thead className="bg-slate-100 border-b-2">
                                <tr>
                                    <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                        Limit Transaksi
                                    </th>
                                    <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                        Sesama Bank
                                    </th>
                                    <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                        Antar Bank
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50 border-b">
                                    <td className="p-4 px-8">Pertransaksi</td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            value={
                                                getByCategory("SESAMA_BANK")
                                                    ?.minAmountTransaction ?? ""
                                            }
                                            readOnly
                                        />
                                    </td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            value={
                                                getByCategory("ANTAR_BANK")
                                                    ?.minAmountTransaction ?? ""
                                            }
                                            readOnly
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Maksimal Transaksi */}
                    <div className="w-full border-b-2 text-2xl border-slate-300 pb-4 pt-14">
                        <span>Maksimal Transaksi</span>
                    </div>
                    <div className="w-full py-10">
                        <table className="w-full border-collapse text-lg text-left table-auto rounded-xl overflow-hidden">
                            <thead className="bg-slate-100 border-b-2">
                                <tr>
                                    <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                        Limit Transaksi
                                    </th>
                                    <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                        Sesama Bank
                                    </th>
                                    <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                        Antar Bank
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50 border-b">
                                    <td className="p-4 px-8">Perhari</td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            value={
                                                getByCategory("SESAMA_BANK")
                                                    ?.maxAmountTransactionOfDay ??
                                                ""
                                            }
                                            readOnly
                                        />
                                    </td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            value={
                                                getByCategory("ANTAR_BANK")
                                                    ?.maxAmountTransactionOfDay ??
                                                ""
                                            }
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 border-b">
                                    <td className="p-4 px-8">Pertransaksi</td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            value={
                                                getByCategory("SESAMA_BANK")
                                                    ?.maxAmountTransaction ?? ""
                                            }
                                            readOnly
                                        />
                                    </td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            value={
                                                getByCategory("ANTAR_BANK")
                                                    ?.maxAmountTransaction ?? ""
                                            }
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 border-b">
                                    <td className="p-4 px-8">
                                        Jumlah Transaksi
                                    </td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            value={
                                                getByCategory("SESAMA_BANK")
                                                    ?.maxTransactionTotal ?? ""
                                            }
                                            readOnly
                                        />
                                    </td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            value={
                                                getByCategory("ANTAR_BANK")
                                                    ?.maxTransactionTotal ?? ""
                                            }
                                            readOnly
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Button Simpan */}
                    <div className="flex justify-end gap-4 p-6">
                        <button className="flex items-center gap-2 text-white text-lg font-semibold px-6 py-2 rounded-lg bg-gradient-to-r from-[#537D24] via-[#73AB33] to-[#60B007] shadow hover:brightness-110 transition">
                            Simpan
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TableLimitSetting;
