import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "./create-trip/index.jsx";
import Header from "./Components/custom/Header.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from "./view-trip/[tripid]/index.jsx";
import Mytrips from "./my-trips/index.jsx";

const router = createBrowserRouter([
  { path: "/", 
    element: <App /> }
    ,{
      path:'/create-trip',
      element:<CreateTrip/>
    },
    {
      path:'/view-trip/:tripId',
      element:<Viewtrip/>
    },
    {
      path:'/my-trips',
      element: <Mytrips/>
    }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header/>
    <RouterProvider router={router} />
    </GoogleOAuthProvider>;
  </StrictMode>
);
