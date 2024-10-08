import classes from "./LifeInsurancePage.module.css";
import product3 from "../../assets/Product3.jpg";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";

const FinalExpenseProduct = () => {
  const iconColor = { color: " rgb(4, 73, 157)" };
  return (
    <>
      <div className={classes.finalExpense}>
        <img className={classes.cardImage2} src={product3} />
        <h1 className={classes.productTitle}>Final Expense</h1>
      </div>

      <p className={classes.productText}>
        Final expense life insurance is a type of life insurance designed to
        cover the costs associated with a person&apos;s funeral, burial, and
        other end-of-life expenses.
      </p>
      <h1>Key features of Final Expense life insurance include:</h1>
      <div className={classes.smallCardContainer}>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} />
            Purpose:{" "}
          </h2>
          <p className={classes.smallCardText}>
            The primary purpose of final expense life insurance is to ease the
            financial burden on loved ones after the policyholder&apos;s death.
            It provides funds to cover funeral and burial expenses, medical
            bills, outstanding debts, and other end-of-life costs.
          </p>
        </div>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} />
            Coverage Amounts:
          </h2>
          <p className={classes.smallCardText}>
            Final expense policies typically offer coverage amounts ranging from
            a few thousand dollars to around <b>$25,000.</b> The coverage amount
            is intended to be sufficient to cover the anticipated costs of a
            funeral and related expenses.
          </p>
        </div>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} />
            Simplified Underwriting:
          </h2>
          <p className={classes.smallCardText}>
            Final expense insurance often features simplified underwriting
            processes compared to traditional life insurance policies. This
            means that applicants may not be required to undergo a medical exam,
            making it easier for individuals with pre-existing health conditions
            to obtain coverage.
          </p>
        </div>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} />
            Premiums:{" "}
          </h2>
          <p className={classes.smallCardText}>
            Premiums for final expense insurance are typically fixed and remain
            level for the duration of the policy. Policyholders can choose to
            pay premiums on a monthly, quarterly, semi-annual, or annual basis,
            depending on their preferences and budget.
          </p>
        </div>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} />
            Permanent Coverage
          </h2>
          <p className={classes.smallCardText}>
            Final expense policies are usually permanent life insurance
            policies, meaning they provide coverage for the policyholder&apos;s
            entire life, as long as premiums are paid. This ensures that
            beneficiaries will receive the death benefit when the policyholder
            passes away, regardless of age or health status.
          </p>
        </div>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} />
            Death Benefit:{" "}
          </h2>
          <p className={classes.smallCardText}>
            Upon the policyholder&apos;s death, the death benefit is paid out to
            the designated beneficiary or beneficiaries. These funds can be used
            to cover funeral expenses, settle outstanding debts, or provide
            financial support to surviving family members.
          </p>
        </div>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} />
            Flexibility:
          </h2>
          <p className={classes.smallCardText}>
            Final expense life insurance policies often offer flexibility in
            terms of coverage options and payment plans. Policyholders can
            customize their coverage amounts and choose payment frequencies that
            best suit their needs and budget.
          </p>
        </div>
        <div className={classes.smallCard}>
          <h2 className={classes.smallCardTitle}>
            <BlurCircularIcon sx={iconColor} />
            Peace of Mind:{" "}
          </h2>
          <p className={classes.smallCardText}>
            By securing final expense life insurance, policyholders gain peace
            of mind knowing that their loved ones will not be burdened with
            significant financial obligations upon their passing. It provides
            reassurance that funeral and end-of-life expenses will be covered,
            allowing families to focus on grieving and healing.
          </p>
        </div>
      </div>
    </>
  );
};

export default FinalExpenseProduct;
