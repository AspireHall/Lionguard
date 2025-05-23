import Navbar from "./Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Footer/Footer";
import classes from "./App.module.css";
import { Routes, Route } from "react-router";
import AboutPage from "./Pages/AboutPage/AboutPage";
import LifeInsurancePage from "./Pages/LifeInsurancePage/LifeInsurancePage";
import AnnuitiesPage from "./Pages/AnnuitiesPage/AnnuitiesPage";
import LivingTrustPage from "./Pages/LivingTrustPage/LivingTrustPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import FeeImpactChart from "./Pages/RetirementCalculator/FeeImpactChart";
import IndexCalculator from "./Pages/IndexCalculator/IndexCalculator";

function App() {
  return (
    <div className={classes.pageContainer}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="lifeInsurance" element={<LifeInsurancePage />} />
        <Route path="annuities" element={<AnnuitiesPage />} />
        <Route path="calculator" element={<FeeImpactChart />} />
        <Route path="indexCalculator" element={<IndexCalculator />} />
        <Route path="livingTrust" element={<LivingTrustPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
