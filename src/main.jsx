// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import Resources from "./pages/Resources.jsx";
// import Attendance from "./pages/Attendance.jsx";
// import Gallery from "./pages/Gallery.jsx";
// import Contact from "./pages/Contact.jsx";
// import Login from "./pages/login/Login.jsx";
// import Register from "./pages/registration/Register.jsx";
// import Faculty from "./pages/About/Faculty.jsx";
// import Director from "./pages/About/Director.jsx";
// import Abouts from "./pages/About/Abouts.jsx";
// import AboutUs from "./pages/About/AboutUs.jsx";
// import Principal from "./pages/About/Principal.jsx";
// import Staff from "./pages/About/Staff.jsx";
// import BscIT from "./pages/BscIT.jsx";
// import ForgotPass from "./pages/login/ForgotPass.jsx";
// import LoginVerify from "./pages/login/LoginVerify.jsx";
// import ResetPass from "./pages/login/ResetPass.jsx";
// import RegistrationVerify from "./pages/registration/RegistrationVerify.jsx";
// import { createContext } from "react";
// const FormData = createContext(null);
// const queryClient = new QueryClient();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <Abouts />,
//         children: [
//           { path: "/about", element: <AboutUs /> },
//           { path: "director-msg", element: <Director /> },
//           { path: "principle-msg", element: <Principal /> },
//           { path: "staff", element: <Staff /> },
//         ],
//       },
//       {
//         path: "/course",
//         element: <BscIT />,
//       },
//       {
//         path: "/faculty",
//         element: <Faculty />,
//       },
//       {
//         path: "/resources",
//         element: <Resources />,
//       },
//       {
//         path: "/attendance",
//         element: <Attendance />,
//       },
//       {
//         path: "/gallery",
//         element: <Gallery />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/registration",
//     element: <Register />,
//   },
//   { path: "/reg-verify", element: <RegistrationVerify /> },
//   {
//     path: "/forgot_pass",
//     element: <ForgotPass />,
//   },
//   { path: "forgot_pass/otp-verify", element: <LoginVerify /> },
//   { path: "/reset-pass", element: <ResetPass /> },
// ]);

// createRoot(document.getElementById("root")).render(
//   <QueryClientProvider client={queryClient}>
//     <FormData.Provider >
//       <RouterProvider router={router} />
//     </FormData.Provider>
//   </QueryClientProvider>
// );

import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Resources from "./pages/Resources.jsx";
import Attendance from "./pages/Attendance.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/registration/Register.jsx";
import Faculty from "./pages/About/Faculty.jsx";
import Director from "./pages/About/Director.jsx";
import Abouts from "./pages/About/Abouts.jsx";
import AboutUs from "./pages/About/AboutUs.jsx";
import Principal from "./pages/About/Principal.jsx";
import Staff from "./pages/About/Staff.jsx";
import BscIT from "./pages/BscIT.jsx";
import ForgotPass from "./pages/login/ForgotPass.jsx";
import ResetPass from "./pages/login/ResetPass.jsx";
import RegistrationVerify from "./pages/registration/RegistrationVerify.jsx";
import Profile from "./pages/Profile.jsx";
import { AuthProvider, useAuth } from "./AuthContext.jsx";
import Events from "./pages/Events.jsx";
import Resetpassotpverify from "./pages/login/Emailverifyforpassreset.jsx";
import { EventAboutProvider } from "../hooks/EventAboutProvider.jsx";

export const FormData = createContext(null);
const queryClient = new QueryClient();

const ProtectRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <EventAboutProvider>
            <Home />
          </EventAboutProvider>
        ),
      },
      {
        path: "/about",
        element: <Abouts />,
        children: [
          {
            path: "/about",
            element: (
              <EventAboutProvider>
                <AboutUs />
              </EventAboutProvider>
            ),
          },
          { path: "director-msg", element: <Director /> },
          { path: "principle-msg", element: <Principal /> },
          { path: "staff", element: <Staff /> },
        ],
      },
      { path: "/course", element: <BscIT /> },
      { path: "/resources", element: <Resources /> },
      {
        path: "/events",
        element: (
          <EventAboutProvider>
            <Events />
          </EventAboutProvider>
        ),
      },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },

      {
        element: <ProtectRoute />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Register /> },
  { path: "/reg-verify", element: <RegistrationVerify /> },
  { path: "/forgot_pass", element: <ForgotPass /> },
  { path: "/otp-verify", element: <Resetpassotpverify /> },
  { path: "/reset-pass", element: <ResetPass /> },
]);

const RootComponent = () => {
  const [formData, setFormData] = useState(); // Yeh state context me pass karenge

  return (
    <QueryClientProvider client={queryClient}>
      <FormData.Provider value={{ formData, setFormData }}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </FormData.Provider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")).render(<RootComponent />);
