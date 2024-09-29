import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import LifeInsurancePage from "./Pages/LifeInsurancePage/LifeInsurancePage.jsx";
import AnnuitiesPage from "./Pages/AnnuitiesPage/AnnuitiesPage.jsx";
import LivingTrustPage from "./Pages/LivingTrustPage/LivingTrustPage.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/lifeInsurance",
        element: <LifeInsurancePage />,
      },
      {
        path: "/annuities",
        element: <AnnuitiesPage />,
      },
      {
        path: "/livingTrust",
        element: <LivingTrustPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
