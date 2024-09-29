import { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import headerLogo from "../assets/LGHeaderLogo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./Navbar.css";

const Navbar = () => {
  const sx = {
    color: "white",
    marginRight: "10px",
    marginLeft: "10px",
    "&:hover": {
      color: "black",
    },
  };

  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.mainContainer}>
      <div className={`navbar ${navbarScrolled ? "scrolled" : ""}`}>
        <div className={classes.leftContainer}>
          <Link className={classes.link}>
            <img className={classes.headerLogo} src={headerLogo} />
            Lionguard Financial
          </Link>
        </div>
        <div className={classes.middleContainer}>
          <Link className={classes.menuFont} to="about">
            About
            <KeyboardArrowDownIcon />
          </Link>
          <Link className={classes.menuFont} to="lifeInsurance">
            Life Insurance
            <KeyboardArrowDownIcon />
          </Link>
          <Link className={classes.menuFont} to="annuities">
            Annuities
            <KeyboardArrowDownIcon />
          </Link>
          <Link className={classes.menuFont} to="livingTrust">
            Living Trust
            <KeyboardArrowDownIcon />
          </Link>
          <Link className={classes.menuFont} to="contact">
            Contact
            <KeyboardArrowDownIcon />
          </Link>
        </div>
        <div className={classes.rightContainer}>
          <a href="https://www.instagram.com/victorjamesfinancial/">
            <InstagramIcon sx={sx} />
          </a>
          <a href="https://x.com/lionguardllc">
            <XIcon sx={sx} />
          </a>
          <a href="https://www.facebook.com/LionGuardFinancialLLC">
            <FacebookOutlinedIcon sx={sx} />
          </a>
          <a
            className={classes.a}
            href="https://calendly.com/lionguardfinancial"
          >
            <div className={classes.bookAppBtn}>Book Appointment</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
