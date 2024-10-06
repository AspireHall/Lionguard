import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.backgroundContainer}></div>
      <div className={classes.secondaryContainer}>
        <div className={classes.leftContainer}>
          <h1 className={classes.title}>Hours</h1>
          <p className={classes.paragraph}>Monda-Friday</p>
          <p className={classes.paragraph}>8am-5pm PST</p>
          <p className={classes.paragraph}>
            After hours by request appointment.
          </p>
        </div>
        <div className={classes.middleContainer}>
          <h1 className={classes.title}>Protect your future</h1>
          <p className={classes.paragraph}>
            Secure your family&apos;s future. Our comprehensive life insurance
            policies offer peace of mind and financial protection when it
            matters most.
          </p>
          <h1 className={classes.title}>Services available nationwide</h1>
        </div>
        <div className={classes.rightContainer}>
          <h1>Further Reading.</h1>
          <a href="https://www.investopedia.com/terms/l/lifeinsurance.asp">
            <button className={classes.articleBtn}>Life Insurance</button>
          </a>
          <a href="https://www.investopedia.com/terms/l/lifeinsurance.asp">
            <button className={classes.articleBtn}>Annuities</button>
          </a>
          <a href="https://www.investopedia.com/terms/l/lifeinsurance.asp">
            <button className={classes.articleBtn}>Living Trust</button>
          </a>
        </div>
      </div>
      <div className={classes.reserveFont}>
        ©2024 Lionguard Financial LLC. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
