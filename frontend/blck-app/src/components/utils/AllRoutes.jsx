import CreateAccount from "../pages/auth/CreateAccount";
import LoginPage from "../pages/auth/LoginPage";
import ContactUs from "../pages/contactus/ContactUs";
import Details from "../pages/details/Details";
import HomePage from "../pages/homepage/HomePage";
import Profile from "../pages/profile/Profile";
import Summary from "../pages/summary/Summary";

export const AllRoutes = [
    { path: "/login" , element: <LoginPage/> },
    { path: "/signup" , element: <CreateAccount/> },
    { path: "/" , element: <HomePage/> },
    { path: "/details/:id" , element: <Details/> },
    { path: "/summary/:id" , element: <Summary/> },
    { path: "/profile/:id" , element: <Profile/> },
    { path: "/contactus" , element: <ContactUs/> },
]