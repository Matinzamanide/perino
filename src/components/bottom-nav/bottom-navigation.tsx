// BottomNavigation
// import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
// import { MdOutlineMenuBook } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  console.log(location.pathname);

  const nav = [
    {
      name: "خانه",
      path: "/",
    },
    {
      name: "تقویم قاعدگی",
      path: "/pms-calender",
    },
    {
      name: "مجله سلامت",
      path: "/fr",
    },
    {
      name: "پروفایل",
      path: "/login",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
      <div className="flex justify-around items-center py-3">
        {/* خانه */}
        {/* <div className="flex flex-col items-center text-pink-500 hover:text-pink-700 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <Link to="/" className="text-xs mt-1">
            خانه
          </Link>
        </div> */}
        {nav.map((item,index) => {
          return (
            <div
            key={index}
            className={`flex flex-col items-center ${
              item.path === location.pathname ? "text-pink-500" : "text-gray-500"
            } hover:text-pink-700 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <Link to={item.path} className="text-xs mt-1">
              {item.name}
            </Link>
          </div>
          );
        })}

        {/* <div className="flex flex-col items-center text-gray-500 hover:text-pink-700 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <Link to="/" className="text-xs mt-1">
            تقویم قاعدگی
          </Link>
        </div>

        <div className="flex flex-col items-center text-gray-500 hover:text-pink-700 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <Link to="/" className="text-xs mt-1">
            مجله سلامت
          </Link>
        </div>

        <div className="flex flex-col items-center text-gray-500 hover:text-pink-700 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7"
            />
          </svg>
          <Link to="/login" className="text-xs mt-1">
            پروفایل
          </Link>
        </div>
 */}
        
      </div>
    </div>
  );
};

export default BottomNavigation;

// // BottomNavigation.js
// import React from 'react';
// import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import { Svg, Path } from 'react-native-svg';

// const BottomNavigation = () => {
//     return (
//         <View style={styles.container}>
//             <Svg height="60" width="100%" style={styles.wave}>
//                 <Path
//                     d="M0,30 C30,60 70,0 100,30 L100,60 L0,60 Z"
//                     fill="#FFB6C1" // رنگ صورتی نزدیک به گلبه‌ای
//                 />
//             </Svg>
//             <View style={styles.iconsContainer}>
//                 <TouchableOpacity>
//                     {/* آیکون اول */}
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     {/* آیکون دوم */}
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     {/* آیکون سوم */}
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//     },
//     wave: {
//         position: 'absolute',
//         top: 0,
//     },
//     iconsContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         paddingVertical: 10,
//     },
// });

// export default BottomNavigation;
