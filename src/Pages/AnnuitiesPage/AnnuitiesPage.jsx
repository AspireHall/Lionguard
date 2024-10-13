import { Link } from "react-router-dom";
import classes from "./AnnuitiesPage.module.css";
import manWithBook from "../../assets/ManwithBook.jpg";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ContactUs from "../ContactUs";
const AnnuitiesPage = () => {
  const icon = <RadioButtonCheckedIcon />;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.topContainer}>
        <div className={classes.topLeft}>
          <h1 className={classes.titleTopLeft}>Annuities</h1>
          <p className={classes.textTopLeft}>
            Navigating the bewildering array of financial advice can indeed be
            daunting, especially when it comes to planning for retirement and
            ensuring financial security for the future. One area that often
            presents a challenge for many individuals is understanding the
            diverse range of annuities available in the market. However, with a
            clear understanding of how annuities work and the various options
            they offer, individuals can make well-informed choices that align
            with their financial goals and preferences.
          </p>
        </div>
        <div className={classes.topRight}>
          <img className={classes.imageHeader} src={manWithBook} />
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.bottomTop}>
          <div className={classes.bottomHeader}>
            <h1 className={classes.productTitle}>Fixed Annuites</h1>
            <p className={classes.productDesc}>
              Like countless others, you may grapple with concerns about
              financial security in retirement. Fixed annuities offer a solution
              by providing a guaranteed income stream that lasts a lifetime,
              ensuring you never outlive your resources.
            </p>
          </div>
          <div className={classes.bottomBody}>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}>
                {icon}
                Lifetime Income
              </h1>
              <p className={classes.productSubDesc}>
                Achieving financial security during retirement hinges on having
                sufficient funds to cover expenses and the assurance that these
                funds will sustain you throughout your lifetime. Integrating a
                fixed income annuity into your retirement plan can provide both
                confidence and security.
              </p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}>
                {icon}
                predictability
              </h1>
              <p className={classes.productSubDesc}>
                Lifetime Income Guarantee An annuity stands alone in its ability
                to offer guaranteed income for life, ensuring financial
                stability that endures. Moreover, you can extend this security
                to your spouse, providing a lifetime income source for both of
                you. What opportunities would arise with the certainty of
                lifelong income?
              </p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}>
                {icon}
                No Market Risk
              </h1>
              <p className={classes.productSubDesc}>
                Consistent Predictability Fixed annuities deliver consistent
                payouts akin to a personalized pension plan, offering a
                dependable income stream. This predictability grants peace of
                mind, enabling you to anticipate and manage your finances
                effectively, thereby enhancing your ability to cover expenses
                comfortably.
              </p>
              <p className={classes.productSubDesc}>
                Protection from Market Volatility Unlike retirement funds often
                tied to the fluctuating stock or housing markets, fixed
                annuities remain unaffected by market fluctuations. This shield
                ensures you won&apos;t experience income reductions during
                downturns, mitigating financial stress during uncertain economic
                times.
              </p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}>
                {icon}
                Income Taxes
              </h1>
              <p className={classes.productSubDesc}>
                Tax Considerations The tax implications of annuity funding
                differ depending on the source of funds. If utilizing pretax
                funds from a 401(k) or IRA, all payouts are subject to taxation.
                Conversely, funding your annuity with after-tax funds entails
                taxes solely on the earnings portion of each payout. Once your
                initial premium is fully reimbursed, subsequent payouts are
                taxed at your ordinary income tax rate. Understanding these tax
                nuances can optimize the tax efficiency of your retirement
                income strategy.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.bottomMiddle}>
          <div className={classes.bottomHeader}>
            <h1 className={classes.productTitle}> Indexed Annuites</h1>
            <p className={classes.productDesc}>
              During your career, you&apos;ve diligently saved for retirement.
              Now, as you contemplate spending those savings, consider the
              benefits of an Indexed Annuity. During market growth, your funds
              accumulate tax-deferred, shielding you from losses during
              downturns. And when you&apos;re ready to transition to retirement,
              an Income Rider provides a reliable stream of income, ensuring
              financial stability throughout your retirement journey.
            </p>
          </div>
          <div className={classes.bottomBody}>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}> {icon}Assured Income</h1>
              <p className={classes.productSubDesc}>
                Consider incorporating an optional Income Rider, which empowers
                you to establish a guaranteed income stream throughout your
                retirement. This income can endure for the entirety of your
                retirement years, and its value may increase with delayed
                commencement of income payments.
              </p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}>
                {icon}Opportunity for Growth
              </h1>
              <p className={classes.productSubDesc}>
                Explore potential growth through Interest Credits, influenced in
                part by the performance of an external market index.
              </p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}>
                {icon}Shielding from Market Downturns
              </h1>
              <p className={classes.productSubDesc}>
                Your capital remains insulated from the inherent risks of the
                stock market or individual stocks.
              </p>
              <p className={classes.productSubDesc}>
                Protection from Market Volatility Unlike retirement funds often
                tied to the fluctuating stock or housing markets, fixed
                annuities remain unaffected by market fluctuations. This shield
                ensures you won&apos;t experience income reductions during
                downturns, mitigating financial stress during uncertain economic
                times.
              </p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}>
                {icon}Tax Deferral Benefits
              </h1>
              <p className={classes.productSubDesc}>
                Annuities offer the advantage of tax-deferred interest
                accumulation, meaning you defer taxes on growth until you make
                withdrawals.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.bottomEnd}>
          <div className={classes.bottomHeader}>
            <h1 className={classes.productTitle}> Immediate Annuites</h1>
            <p className={classes.productDesc}>
              Single Premium Immediate Annuities (SPIAs) offer an instant source
              of guaranteed income for you. This steady stream of income ensures
              financial stability throughout your lifetime, providing you with
              immediate, lifelong financial security.
            </p>
          </div>
          <div className={classes.bottomBody}>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}>
                {" "}
                {icon}Guaranteed income
              </h1>
              <p className={classes.productSubDesc}>
                In exchange for a single purchase payment, you receive a stream
                of guaranteed income that begins immediately (up to 12 months
                after the date your contract is issued). You can receive
                guaranteed income for life, for a specific length of time, or a
                combination of both, depending on the annuity option you choose.
              </p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}> {icon}Predictability</h1>
              <p className={classes.productSubDesc}>
                A SPIA provides a reliable source of income that is not affected
                by fluctuations in the stock market. At the time you purchase a
                contract, you know how much income you will receive.
              </p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}> {icon}Tax efficiency</h1>
              <p className={classes.productSubDesc}>
                If you&apos;ve already paid taxes on the money used to purchase
                your annuity contract, a portion of each annuity payment will be
                tax-free, until the total amount of income you&apos;ve received
                equals the amount of your single purchase payment.
              </p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}> {icon}Flexibility</h1>
              <p className={classes.productSubDesc}>
                A SPIA offers you a certain amount of flexibility, including the
                ability to add an inflation protection rider that can
                automatically increase income payments by your choice of one,
                two, three, or four percent annually. You can also adjust for a
                period certain which means you can decrease or increase the
                period of time you will receive income payments. And you can
                select an annuity option that includes beneficiary protection
                for a spouse or loved one that can protect your designated
                beneficiary in the event of your death.
              </p>
            </div>
            <div className={classes.card}>
              <h1 className={classes.productSubTitle}>
                {" "}
                {icon}Initial Lump Sump
              </h1>
              <p className={classes.productSubDesc}>
                A Single Premium Immediate Annuity (SPIA) allows you to put a
                lump sum of money into a contract and immediately give yourself
                an income you can&apos;t outlive, guaranteed. You can choose
                monthly, quarterly or annual income that allows you to have
                control over how often you receive the SPIA payout.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default AnnuitiesPage;
