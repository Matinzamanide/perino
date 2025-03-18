import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e:any) => {
        e.preventDefault();
        // منطق ورود به سیستم
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 transform transition-all duration-500 hover:scale-105">
                <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">ورود به حساب کاربری</h1>
                <form onSubmit={handleLogin}>
                    {/* فیلد ایمیل */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="example@example.com"
                            required
                        />
                    </div>

                    {/* فیلد رمز عبور */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">رمز عبور</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="********"
                            required
                        />
                    </div>

                    {/* دکمه ورود */}
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-all duration-300"
                    >
                        ورود
                    </button>
                </form>

                {/* لینک‌های ثبت‌نام و بازیابی رمز عبور */}
                <div className="mt-6 text-center">
                    <a
                        href="#"
                        className="text-sm text-pink-600 hover:text-pink-700 transition-all duration-300"
                    >
                        رمز عبور خود را فراموش کرده‌اید؟
                    </a>
                    <p className="mt-2 text-sm text-gray-600">
                        حساب کاربری ندارید؟{" "}
                        <a
                            href="#"
                            className="text-pink-600 hover:text-pink-700 transition-all duration-300"
                        >
                            ثبت‌نام کنید
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;