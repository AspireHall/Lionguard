import { Link } from "react-router-dom";
import GenerationImage from "../../assets/GenerationFamilyfaded.jpg";
import "../Pages.css";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ContactsIcon from "@mui/icons-material/Contacts";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import classes from "./Homepage.module.css";

const HomePage = () => {
  const sx = {
    width: "15%",
    height: "auto",
    color: "white",
    backgroundColor: "rgb(50, 129, 227)",
    borderRadius: "30px",
    borderWith: "5px",
    borderStyle: "solid",
    borderWidth: "10px",
    borderColor: "rgb(50, 129, 227)",
    "&:hover": {
      color: "black",
      cursor: "pointer",
    },
  };

  return (
    <div className="mainContainer">
      <div className={classes.imageContainer}>
        <img className={classes.image} src={GenerationImage} alt="homepage" />
        <div className={classes.imageTextContainer}>
          <div className={classes.title}>Protect your future</div>
          <div className={classes.text}>
            Secure your family&apos;s future. see what coverage is right for
            you...
          </div>
          <div className={classes.espanolbtn}>Hablamos español</div>
        </div>
      </div>
      <div className={classes.productContainer}>
        <a className={classes.link} href="/lifeInsurance">
          <HealthAndSafetyIcon sx={sx} />
          <div className={classes.textContainer}>
            <h1 className={classes.productTitle}> Life Insurance</h1>
            <p>
              Are you ready to safeguard your future? Let&apos;s talk about
              securing your tomorrow with peace of mind.
              <br />
              <br />
              <br />
              <br />
            </p>
            <p className={classes.learnBtn}>
              Learn More <KeyboardDoubleArrowRightIcon />
            </p>
          </div>
        </a>
        <a className={classes.link} href="/annuities">
          <CardTravelIcon sx={sx} />
          <div className={classes.textContainer}>
            <h1 className={classes.productTitle}> Annuities</h1>
            <p>
              Choosing the Perfect Annuity and navigating the vast sea of
              financial advice can be overwhelming—let us assist you in making
              the right choice.
              <br />
              <br />
            </p>
            <p className={classes.learnBtn}>
              Learn More <KeyboardDoubleArrowRightIcon />
            </p>
          </div>
        </a>
        <a className={classes.link} href="/livingTrust">
          <AccountBalanceIcon sx={sx} />
          <div className={classes.textContainer}>
            <h1 className={classes.productTitle}> Living Trust</h1>
            <p>
              Because everyone should have access to affordable, attorney
              drafted solutions to protect their family and give them peace of
              mind.
              <br />
              <br />
              <br />
            </p>
            <p className={classes.learnBtn}>
              Learn More <KeyboardDoubleArrowRightIcon />
            </p>
          </div>
        </a>
        <a className={classes.link} href="/about">
          <ContactsIcon sx={sx} />
          <div className={classes.textContainer}>
            <h1 className={classes.productTitle}>Learn More</h1>
            <p>
              Ready to take the first step towards securing your family&apos;s
              future? Explore our website to learn more about our services, and
              get in touch with us to schedule a consultation
            </p>
            <p className={classes.learnBtn}>
              Learn More <KeyboardDoubleArrowRightIcon />
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
