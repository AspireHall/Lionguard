import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.pageContainer}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
