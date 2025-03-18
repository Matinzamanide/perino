import Hello from "../pages/hello";
import Home from "../pages/home/home";
import LoginPage from "../pages/login/login";
import PmsCalender from "../pages/pms-calender/pms-calender";

export const routes=[
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/h',
        element:<Hello/>
    },
    {
        path:'/pms-calender',
        element:<PmsCalender/>
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
]