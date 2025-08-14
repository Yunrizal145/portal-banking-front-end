import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../../assets/login.png";

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const isFormValid = username.trim() !== "" && password.trim() !== "";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic
        console.log({ username, password });
    };

    const handleLogin = () => {
        navigate("/dashboard");
    };

    return (
        <div className="w-full h-full">
            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                <div className="bg-white flex rounded-2xl overflow-hidden">
                    <img src={LoginImg} alt="Login" className="w-96" />
                    <div className="w-full h-full flex items-center justify-center mx-auto my-auto">
                        <div className="mx-10 bg-white p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Masuk
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Username */}
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1">
                                        Kata Sandi
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Masukkan Kata Sandi"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword((prev) => !prev)
                                            }
                                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                                        >
                                            👁️
                                        </button>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    onClick={handleLogin}
                                    disabled={!isFormValid}
                                    className={`w-full font-semibold py-2 rounded-md transition ${
                                        isFormValid
                                            ? "bg-blue-600 text-white hover:bg-blue-700"
                                            : "bg-blue-200 text-white cursor-not-allowed"
                                    }`}
                                >
                                    Masuk
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
