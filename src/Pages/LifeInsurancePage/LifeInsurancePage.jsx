import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./LifeInsurancePage.module.css";
import headerImage from "../../assets/happyfamily.jpg";
import TermProduct from "./TermProduct";
import ReturnPremiumProduct from "./ReturnPremiumProduct";
import FinalExpenseProduct from "./FinalExpenseProduct";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const LifeInsurancePage = () => {
  const [insurance, setInsurance] = useState(<TermProduct />);
  const termChangeHandler = () => {
    setInsurance(<TermProduct />);
  };
  const premiumTermChangeHandler = () => {
    setInsurance(<ReturnPremiumProduct />);
  };
  const finalExpenseChangeHandler = () => {
    setInsurance(<FinalExpenseProduct />);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.contact}>
        <h1 className={classes.contactNmb}>323-369-1674</h1>
        <button className={classes.contactBtn}>GET A FREEE QUOTE</button>
      </div>
      <img className={classes.headerImage} src={headerImage} />
      <div className={classes.sectionOne}>
        <div className={classes.sectionOneTop}>
          <h1>Our Life Insurance Services</h1>
        </div>
        <div className={classes.sectionOneBottom}>
          <p>Are you ready to safeguad your future?</p>
          <p>
            Let&apos;s talk about securing your tomorrow with peace of mind.
            Life insurance is more than just a policy; it's a promise to protect
            what matters most.
          </p>
        </div>
      </div>
      <div className={classes.sectionOneCover}>
        <button className={classes.productOneBtn} onClick={termChangeHandler}>
          Term
        </button>
        <button
          className={classes.productTwoBtn}
          onClick={premiumTermChangeHandler}
        >
          Return of Premium Term
        </button>
        <button
          className={classes.productThreeBtn}
          onClick={finalExpenseChangeHandler}
        >
          Final Expense
        </button>
      </div>
      <div className={classes.sectionTwo}>{insurance}</div>
      <Link className={classes.contactUsFooter} to="/contact">
        <ContactPageIcon sx={{ width: "75px", height: "75px" }} />
        Contact Us for a Free Quote
      </Link>
    </div>
  );
};

export default LifeInsurancePage;
