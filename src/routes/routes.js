import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import BookingDetails from "../components/BookingDetials/BookingDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../Layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/bookingDetails',
                element: <BookingDetails></BookingDetails>
            },
            {
                path: 'login/',
                element: <Login></Login>
            },
            {
                path: 'register/',
                element: <Register></Register>
            },
            {
                path: 'login/',
                element: <Login></Login>
            }
        ],
    }
])