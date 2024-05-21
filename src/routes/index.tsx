import Auth from "@/layout/Auth/Auth";
import Dashboard from "@/layout/Dasboard/Dashboard";
import About from "@/pages/About";

import ChangePassword from "@/pages/ChangePassword";
import Email from "@/pages/Email";

import DashboardHome from "@/pages/DashboardHome";
import ProfilePage from "@/pages/Profile";
import ForgetPassword from "@/pages/ForgetPassword";
import Login from "@/pages/Login";
import MakeAdmin from "@/pages/MakeAdmin";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Profile from "@/pages/Profile";
import Contact from "@/pages/Contact";

import SetNewPassword from "@/pages/SetNewPassword";
import Settings from "@/pages/Settings";
import TotalUser from "@/pages/TotalUser";
import PurchasedPackageList from "@/pages/PurchasedList";
import TermsAndCondition from "@/pages/TermsAndCondition";
import TotalReview from "@/pages/TotalReview";
import CreateEvents from "@/pages/CreateEvents";
import VerifyEmail from "@/pages/VerifyEmail";
import { createBrowserRouter } from "react-router-dom";
import Subscription from "@/pages/Subscription";
import ErrorPage from "@/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <DashboardHome />,
      },
      {

        path: "/user-details",
        element: <PurchasedPackageList />,

      },
      {
        path: "/user-list",
        element: <PurchasedPackageList />,
      },
      {
        path: "/createEvents",
        element: <CreateEvents />,
      },
      {
        path: "/totalReview",
        element: <TotalReview />,
      },

      {
        path: "/email",
        element: <Email />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/make-admin",
        element: <MakeAdmin />,
      },

      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/settings/contact",
        element: <Contact />,
      },
      {
        path: "/settings/terms-and-conditions",
        element: <TermsAndCondition />,
      },
      {
        path: "/settings/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/settings/about",
        element: <About />,
      },
      {
        path: "/settings/profile",
        element: <ProfilePage/>,
      },

      {
        path: "/settings/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/auth/verify",
        element: <VerifyEmail />,
      },
      {
        path: "/auth/set-new-password",
        element: <SetNewPassword />,
      },
    ],
  },
]);

export default router;
