import { useState } from "react";

const TableFeeSetting = () => {
    const [username, setUsername] = useState("");
    const [isUserFound, setIsUserFound] = useState(false); // null = belum dicari
    const [showTable, setShowTable] = useState(false);

    const handleSearchUser = () => {
        // Contoh dummy check, nanti bisa diganti fetch API
        const dummyUsers = ["Rizal27", "Ibrahim", "Hamad"];
        if (dummyUsers.includes(username.trim())) {
            setIsUserFound(true);
            setShowTable(true);
        } else {
            setIsUserFound(false);
            setShowTable(false);
        }
    };

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
                    {/* Maksimal Transaksi */}
                    <div className="w-full py-10">
                        <table className="w-full border-collapse text-lg  text-left table-auto rounded-xl overflow-hidden">
                            <thead className="bg-slate-100 rounded-lg border-b-2 ">
                                <tr>
                                    <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                        Jenis Transfer
                                    </th>
                                    <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                        Biaya Transfer
                                    </th>
                                    <th className="p-4 px-8 font-medium border-r-2 border-slate-200">
                                        Limit Fee/Hari
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50 border-b">
                                    <td className="p-4 px-8">Sesama Bank</td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Rp1.000.000,00"
                                        />
                                    </td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="0"
                                        />
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 border-b">
                                    <td className="p-4 px-8">Antar bank</td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Rp1.000.000,00"
                                        />
                                    </td>
                                    <td className="p-4 px-8">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="0"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Button Simpan */}
                    <div className="flex justify-end gap-4  p-6">
                        {/* Tipe Transfer Dropdown */}
                        <button className="flex items-center gap-2 text-white text-lg font-semibold px-6 py-2 rounded-lg bg-gradient-to-r from-[#537D24] via-[#73AB33] to-[#60B007] shadow hover:brightness-110 transition">
                            Simpan
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TableFeeSetting;
