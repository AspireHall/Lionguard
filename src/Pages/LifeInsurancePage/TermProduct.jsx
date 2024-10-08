import classes from "./LifeInsurancePage.module.css";
import product1 from "../../assets/Product1.png";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";

const TermProduct = () => {
  const iconColor = { color: " rgb(4, 73, 157)" };
  return (
    <>
      <div className={classes.term}>
        <img className={classes.cardImage2} src={product1} />
        <h1 className={classes.productTitle}>Term</h1>
      </div>
      <p className={classes.productText}>
        Term life insurance provides coverage for a specified period, typically
        ranging from <b>5</b> to <b>30</b> years, offering financial protection
        to your beneficiaries if you pass away during the term of the policy.
        <br />
        <br /> It&apos;s a straightforward and affordable option that provides a
        death benefit to your loved ones, helping them cover expenses such as
        <ul>
          <li>mortgages</li>
          <li>debts</li>
          <li>living costs</li>
          <li>and education expenses in the event of your untimely death.</li>
        </ul>
      </p>
      <h1>Key features of term life insurance include:</h1>
      <div className={classes.smallCardContainer}>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} /> Affordability:{" "}
          </h2>
          <p className={classes.smallCardText}>
            Term policies generally offer lower premiums compared to permanent
            life insurance options, making it an attractive choice for those
            seeking maximum coverage at an affordable rate.
          </p>
        </div>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} /> Flexibility:{" "}
          </h2>
          <p className={classes.smallCardText}>
            You can choose the duration of coverage based on your specific
            needs, whether you want protection for a specific period, such as
            until your children are financially independent or until your
            mortgage is paid off
          </p>
        </div>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} /> Death Benefit:{" "}
          </h2>
          <p className={classes.smallCardText}>
            If you pass away during the term of the policy, your beneficiaries
            receive the death benefit, which is typically paid out as a lump
            sum. This can provide financial security and stability to your loved
            ones during a difficult time
          </p>
        </div>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} /> Renewability & Convertibility:
          </h2>
          <p className={classes.smallCardText}>
            Some term policies offer the option to renew or convert to permanent
            life insurance without the need for a medical exam, providing
            flexibility as your needs change over time.
          </p>
        </div>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} /> No Cash Value:
          </h2>
          <p className={classes.smallCardText}>
            Unlike permanent life insurance policies such as whole life or
            universal life, term life insurance does not accumulate cash value
            over time. It is purely designed to provide a death benefit to your
            beneficiaries.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermProduct;
