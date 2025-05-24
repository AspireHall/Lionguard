import { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router";
import headerLogo from "../assets/LGHeaderLogo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import CalculateIcon from "@mui/icons-material/Calculate";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ContactsIcon from "@mui/icons-material/Contacts";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./Navbar.css";
import { Button, Menu, MenuItem } from "@mui/material";

const Navbar = () => {
  const PaperProps = {
    sx: {
      backgroundColor: "rgb(31, 99, 183)",
      borderColor: "white",
      borderStyle: "solid",
      borderRadius: "10px",
      borderWidth: "1px",
      height: "280px",
      display: "flex",
      justifyContent: "center",
      width: "250px",
    },
  };
  const PaperProps2 = {
    sx: {
      backgroundColor: "rgb(31, 99, 183)",
      borderColor: "white",
      borderStyle: "solid",
      borderRadius: "10px",
      borderWidth: "1px",
      height: "100px",
      display: "flex",
      paddingLeft: "15px",
      justifyContent: "center",
      width: "250px",
    },
  };

  const sx = {
    color: "white",
    marginRight: "10px",
    marginLeft: "10px",
    "&:hover": {
      color: "black",
    },
  };

  const menusx = {
    borderRadius: "10px",
    backgroundColor: "rgb(2, 45, 98)",
    width: "200px",
    height: "50px",
    margin: "2px",
    paddingLeft: "40px",
    "&:hover": {
      backgroundColor: "rgb(1,1,1)",
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

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  /* cosnt[(anchorOption, setAnchorOption)] = useState(null);
  const openOption = Boolean(anchorEl);
  const handleOptionClick = (event) => {
    setAnchorOption(event.currentTarget);
  };
  const handleOptionClick = () => {
    setAnchorOption(null);
  };
  */

  return (
    <div className={classes.mainContainer}>
      <div className={`navbar ${navbarScrolled ? "scrolled" : ""}`}>
        <div className={classes.leftContainer}>
          <Link className={classes.logoLink} to="/">
            <img className={classes.headerLogo} src={headerLogo} />
            Lionguard Financial
          </Link>
        </div>
        <div className={classes.middleContainerBreakpoint}>
          <Button
            sx={{
              color: "white",
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: "1px",
              width: "200px",
              "&:hover": {
                borderColor: "black",
                color: "black",
              },
            }}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Product Menu
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={PaperProps}
          >
            <MenuItem onClick={handleClose} sx={menusx}>
              <HealthAndSafetyIcon sx={{ color: "white" }} />
              &nbsp;
              <Link className={classes.dropMenuFont} to="/lifeInsurance">
                Life Insurance
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={menusx}>
              <CardTravelIcon sx={{ color: "white" }} /> &nbsp;
              <Link className={classes.dropMenuFont} to="/annuities">
                Annuities
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={menusx}>
              <CalculateIcon sx={{ color: "white" }} /> &nbsp;
              <Link className={classes.dropMenuFont} to="/calculator">
                Calculator
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={menusx}>
              <CalculateIcon sx={{ color: "white" }} /> &nbsp;
              <Link className={classes.dropMenuFont} to="/indexcalculator">
                IndexCalculator
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={menusx}>
              <AccountBalanceIcon sx={{ color: "white" }} /> &nbsp;
              <Link className={classes.dropMenuFont} to="/livingTrust">
                Living Trust
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={menusx}>
              <ContactsIcon sx={{ color: "white" }} /> &nbsp;
              <Link className={classes.dropMenuFont} to="/about">
                Learn More
              </Link>
            </MenuItem>
            <div className={classes.socialsMenu}>
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
              ></a>
            </div>
          </Menu>
        </div>
        <div className={classes.middleContainer}>
          <Link className={classes.menuFont} to="/about">
            About
            <KeyboardArrowDownIcon />
          </Link>
          <Link className={classes.menuFont} to="/lifeInsurance">
            Life Insurance
            <KeyboardArrowDownIcon />
          </Link>
          <Link className={classes.menuFont} to="/annuities">
            Annuities
            <KeyboardArrowDownIcon />
          </Link>
          <Button
            style={{
              marginLeft: "30px",
              marginRight: "30px",
              paddingTop: "7.5px",
              color: "white",
              textTransform: "none",
              fontFamily: "initial",
              fontSize: "18px",
            }}
            id="demo-positioned-button"
            aria-controls={open2 ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? "true" : undefined}
            onMouseEnter={handleClick2}
          >
            Calculator <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose2}
            MenuListProps={{
              onMouseLeave: handleClose2,
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={PaperProps2}
          >
            <MenuItem>
              <Link
                className={classes.menuFont}
                style={{ position: "relative", zIndex: "1" }}
                onClick={handleClose2}
                to="/calculator"
              >
                <CalculateIcon />
                &nbsp; Compound Calculator
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                className={classes.menuFont}
                style={{ position: "relative", zIndex: "1" }}
                onClick={handleClose2}
                to="/indexCalculator"
              >
                <CalculateOutlinedIcon />
                &nbsp; Index Calculator
              </Link>
            </MenuItem>
          </Menu>

          <Link className={classes.menuFont} to="/livingTrust">
            Living Trust
            <KeyboardArrowDownIcon />
          </Link>
          <Link className={classes.menuFont} to="/contact">
            Contact
            <KeyboardArrowDownIcon />
          </Link>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.socialsContainer}>
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
            ></a>
          </div>
          <a
            style={{ textDecoration: "none" }}
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
