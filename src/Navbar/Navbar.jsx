import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import headerLogo from "../assets/LGHeaderLogo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
const Navbar = () => {
  const sx = {
    color: "white",
    marginRight: "10px",
    marginLeft: "10px",
    "&:hover": {
      color: "black",
    },
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <img className={classes.headerLogo} src={headerLogo} />
        Lionguard Financial
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
        <a className={classes.a} href="https://calendly.com/lionguardfinancial">
          <div className={classes.bookAppBtn}>Book Appointment</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
