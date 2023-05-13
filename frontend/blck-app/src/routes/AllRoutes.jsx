import CreateAccount from "../pages/auth/CreateAccount";
import LoginPage from '../pages/auth/LoginPageOtp'
import ContactUs from "../pages/contactus/ContactUs";
import Details from "../pages/details/Details";
import DetailsSelfDrive from "../pages/details/DetailsSelfDrive";
import HomePage from "../pages/homepage/HomePage";
import Profile from "../pages/profile/Profile";
import Summary from "../pages/summary/Summary"
import SummaryAirport from "../pages/summary/SummaryAirport";
import SummaryOutstation from "../pages/summary/SummaryOutstation";
import SummarySelfDrive from "../pages/summary/SummarySelfDrive";
import Jet from "../pages/JetsCopter/Jet";
import Yachts from "../pages/Yachts/Yachts";
import Payments from "../pages/payment/razorpay";
import TermsAndConditions from "../pages/legal/TermsAndConditions";
import PrivacyPolicy from "../pages/legal/PrivacyPolicy";
import RefundAndCancellation from "../pages/legal/RefundAndCancellation";
// import LoginPage from "../pages/auth/LoginPage";

export const AllRoutes = [
    { id:0 ,path: "*", element: <HomePage/> },
    { id:1, path: "/login" , element: <LoginPage/> },
    // { id:1, path: "/" , element: <LoginPage/> },
    { id:2, path: "/signup" , element: <CreateAccount/> },
    { id:3, path: "/" , element: <HomePage/> },
    { id:4, path: "/details/:id" , element: <Details/> },
    { id:5, path: "/details-self-drive/:id" , element: <DetailsSelfDrive/> },
    { id:6, path: "/summary/:id" , element: <Summary/> },
    { id:7, path: "/summary-self-drive/:id" , element: <SummarySelfDrive/> },
    { id:8, path: "/summary-airport/:id" , element: <SummaryAirport/> },
    { id:9, path: "/summary-outstation/:id" , element: <SummaryOutstation/> },
    { id:10, path: "/profile/:id" , element: <Profile/> },
    { id:11, path: "/contactus" , element: <ContactUs/> },
    { id:12, path: "/yachts" , element: <Yachts/> },
    { id:13, path: "/jets_copters" , element: <Jet/> },
    { id:14, path: "/payments" , element: <Payments/> },
    { id:15, path: "/terms-and-conditions" , element: <TermsAndConditions/> },
    { id:16, path: "/privacy-policy" , element: <PrivacyPolicy/> },
    { id:17, path: "/refund-and-cancellations" , element: <RefundAndCancellation/> },
]