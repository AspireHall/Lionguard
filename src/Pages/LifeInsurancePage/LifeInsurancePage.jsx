import { useState } from "react";
import { Link } from "react-router";
import ContactUs from "../ContactUs";
import classes from "./LifeInsurancePage.module.css";
import headerImage from "../../assets/happyfamily.jpg";
import TermProduct from "./TermProduct";
import ReturnPremiumProduct from "./ReturnPremiumProduct";
import FinalExpenseProduct from "./FinalExpenseProduct";

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
        <Link to="/contact">
          <div className={classes.contactBtn}> GET A FREEE QUOTE</div>
        </Link>
      </div>
      <img className={classes.headerImage} src={headerImage} />
      <div className={classes.sectionOne}>
        <div className={classes.sectionOneTop}>
          <h1 className={classes.sectionOneTitle}>
            Our Life Insurance Services
          </h1>
        </div>
        <div className={classes.sectionOneBottom}>
          <p>Are you ready to safeguad your future?</p>
          <p>
            Let&apos;s talk about securing your tomorrow with peace of mind.
            Life insurance is more than just a policy; it&apos;s a promise to
            protect what matters most.
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
      <ContactUs />
    </div>
  );
};

export default LifeInsurancePage;
