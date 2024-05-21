import Auth from "@/layout/Auth/Auth";
import Dashboard from "@/layout/Dasboard/Dashboard";
import About from "@/pages/About";

import ChangePassword from "@/pages/ChangePassword";
import Email from "@/pages/Email";

import DashboardHome from "@/pages/DashboardHome";
import FAQPage from "@/pages/FAQ";
import ForgetPassword from "@/pages/ForgetPassword";
import Login from "@/pages/Login";
import MakeAdmin from "@/pages/MakeAdmin";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Profile from "@/pages/Profile";
import Slider from "@/pages/Slider";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <DashboardHome />,
      },
      {
        path: "/totalUser",
        element: <TotalUser/>,
      },
      {
        path: "/purchase-list",
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
        path: "/settings/slider",
        element: <Slider />,
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
        path: "/settings/faq",
        element: <FAQPage />,
      },

      {
        path: "/change-password",
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
