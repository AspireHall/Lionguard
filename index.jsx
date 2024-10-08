import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./src/Pages/HomePage/HomePage.jsx";
import AboutPage from "./src/Pages/AboutPage/AboutPage.jsx";
import LifeInsurancePage from "./src/Pages/LifeInsurancePage/LifeInsurancePage.jsx";
import AnnuitiesPage from "./src/Pages/AnnuitiesPage/AnnuitiesPage.jsx";
import LivingTrustPage from "./src/Pages/LivingTrustPage/LivingTrustPage.jsx";
import ContactPage from "./src/Pages/ContactPage/ContactPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App.jsx";

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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
