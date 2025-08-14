import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideProfile = () => {
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        // Code tambahan jika ingin melakukan clear storage dan remove token
        navigate("/login");
    };

    return (
        <div>
            <img
                onClick={toggleProfile}
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Profile"
                className="w-16 h-16 rounded-full cursor-pointer border-2 border-white shadow"
            />

            {/* Pop-up profil */}
            {showProfile && (
                <div className="absolute top-14 right-32 py-4 px-6 w-80 bg-white rounded-xl shadow-lg z-10">
                    <div className="flex items-center space-x-4">
                        <img
                            className="h-24 w-24 rounded-full"
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                            alt="Erin Lindford"
                        />
                        <div>
                            <p className="text-lg text-black font-semibold">
                                Hammad Yunrizal Aushaf
                            </p>
                            <p className="text-slate-500 font-medium">
                                Backend Developer
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 text-center sm:text-left">
                        <button
                            onClick={handleLogout}
                            className="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideProfile;
