import classes from "./LifeInsurancePage.module.css";
import product2 from "../../assets/Product2.png";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";

const ReturnPremiumProduct = () => {
  const iconColor = { color: " rgb(4, 73, 157)" };
  return (
    <>
      <div className={classes.returnPremium}>
        <img className={classes.cardImage2} src={product2} />
        <h1 className={classes.productTitle}>Return of Premium Term</h1>
      </div>
      <p className={classes.productText}>
        Return of Premium (ROP) term life insurance is a unique variation of
        traditional term life insurance that offers a refund of premiums paid if
        the insured person outlives the term of the policy. It combines the
        death benefit protection of term life insurance with a savings component
        that provides a return of the premiums paid if the policyholder survives
        the term.
      </p>
      <h1>
        Key features of Return of Premium (ROP) term life insurance include:
      </h1>
      <div className={classes.smallCardContainer}>
        <section className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            {" "}
            <BlurCircularIcon sx={iconColor} />
            Death Benefit:{" "}
          </h2>
          <p className={classes.smallCardText}>
            Like traditional term life insurance, ROP term policies provide a
            death benefit to beneficiaries if the insured person passes away
            during the term of the policy. This death benefit can help cover
            financial obligations such as mortgages, debts, and living expenses
            for your loved ones.
          </p>
        </section>
        <section className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            {" "}
            <BlurCircularIcon sx={iconColor} />
            Premium Refund:
          </h2>
          <p className={classes.smallCardText}>
            If the insured individual survives the term of the policy, premiums
            paid throughout the duration of the policy are returned to the
            policyholder. This feature distinguishes ROP term life insurance
            from traditional term policies, offering a form of savings or
            investment return on the premiums paid.
          </p>
        </section>
        <section className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            {" "}
            <BlurCircularIcon sx={iconColor} />
            Affordability:{" "}
          </h2>
          <p className={classes.smallCardText}>
            While ROP term life insurance typically has higher premiums compared
            to standard term life policies, the potential for a premium refund
            can make it an attractive option for individuals who want the
            security of life insurance coverage along with the possibility of
            receiving a refund if they outlive the policy term.
          </p>
        </section>
        <section className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            {" "}
            <BlurCircularIcon sx={iconColor} />
            Flexibility:{" "}
          </h2>
          <p className={classes.smallCardText}>
            ROP term policies often offer flexible term lengths, allowing
            policyholders to choose a duration that aligns with their specific
            needs and financial goals. ROP Term lengths typically range from 20
            to 30 years.
          </p>
        </section>
        <section className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            {" "}
            <BlurCircularIcon sx={iconColor} />
            No Cash Value:{" "}
          </h2>
          <p className={classes.smallCardText}>
            Similar to traditional term life insurance, ROP term policies do not
            accumulate cash value over time. The return of premiums is only
            applicable if the insured person survives the term of the policy.
          </p>
        </section>
      </div>
    </>
  );
};

export default ReturnPremiumProduct;
