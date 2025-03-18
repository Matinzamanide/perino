import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    
    <div className="hidden  md:block relative top-10 p-3 mx-auto bg-white w-[80%] rounded-full shadow-[0_0_16px_0_#6c23371f] z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* لوگو */}
          <div className="flex items-center">
            <div className="text-white text-2xl font-bold tracking-wide">
              <span className="bg-clip-text text-transparent bg-pink-600">
                Perino
              </span>
            </div>
          </div>

          {/* لینک‌ها */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className=" text-sm font-medium hover:text-pink-600 transition duration-300 ease-in-out"
            >
              صفحه اصلی
            </Link>
            <Link
              to="/pms-calender"
              className=" text-sm font-medium hover:text-pink-600 transition duration-300 ease-in-out"
            >
              تقویم قاعدگی
            </Link>
            <Link
              to="/pms-calender"
              className=" text-sm font-medium hover:text-pink-600 transition duration-300 ease-in-out"
            >
              مجله سلامت
            </Link>
            <Link
              to="#contact"
              className=" text-sm font-medium hover:text-pink-600 transition duration-300 ease-in-out"
            >
              فرصت های شغلی
            </Link>
          </div>

          {/* دکمه ورود */}
          <div className="hidden md:flex">
            <Link
              to="/login"
              className="bg-white text-purple-500 hover:bg-gray-100 hover:text-pink-600 px-4 py-2 rounded-lg text-sm font-semibold shadow-lg transition duration-300 ease-in-out"
            >
              ورود
            </Link>
          </div>

          {/* منوی موبایل */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
