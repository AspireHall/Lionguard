import LivingTrustImg from "../../assets/LivingTrustLG.png";
import EstateProImg from "../../assets/EstateProImage.png";
import classes from "./LivingTrustPage.module.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import UpdateIcon from "@mui/icons-material/Update";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GavelIcon from "@mui/icons-material/Gavel";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import ContactUs from "../ContactUs";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
const LivingTrustPage = () => {
  const sx = { width: "50px", height: "50px" };
  return (
    <div className={classes.mainContainer}>
      <div className={classes.headerContainer}>
        <div className={classes.headerLeft}>
          <img
            className={classes.headerLeftImg}
            src={EstateProImg}
            alt="LivingTrustLogo"
          />
          <a
            href={
              "https://www.estatedocspro.com/free_trial.php?type=delta&a=Victor"
            }
            className={classes.headerLeftBtn}
          >
            Start your trial today
          </a>
          <h2 className={classes.productTitle}>Estate Planning For Everyone</h2>
          <p className={classes.productText}>
            Our legal system is expensive, but protecting your family
            shouldn&apos;t be. Many people don&apos;t have an estate plan
            because they can&apos;t justify many hours of attorney fees.
            <b> Estate Docs Pro</b> was built to solve this problem. Because
            everyone should have access to affordable, attorney drafted
            solutions to protect their family and give them peace of mind. The
            law is complex, our software makes it easy. Try{" "}
            <b>Estate Docs Pro </b>
            today!
          </p>
        </div>
        <div className={classes.headerRight}>
          <img
            className={classes.headerRightImg}
            src={LivingTrustImg}
            alt="LivingTrust"
          />
        </div>
      </div>

      <div className={classes.productPlanContainer}>
        <div className={classes.productPlanCard}>
          <section className={classes.productCardSection1}>
            <h1 className={classes.productCardTitle1}>
              COMPREHENSIVE ESTATE PLAN
            </h1>
            <h1 className={classes.productCardTitle2}>$1,995.00</h1>
          </section>
          <section className={classes.productCardSection2}>
            <section className={classes.productCardSection2Left}>
              <p className={classes.productSectionText}>
                • Revocable Living Living
                <br></br> &nbsp;&nbsp;○ Income Only option
                <br></br> &nbsp;&nbsp;○ A/B Trust option
                <br></br> &nbsp;&nbsp;○ Spendrift Provisions
                <br></br> &nbsp;&nbsp;○ IRA &apos;Look-through&apos;
                <br></br> &nbsp;&nbsp;○ Optional Sub-Trust for
                <br></br>&nbsp; &nbsp; &nbsp; &nbsp; Children
                <br></br>
                <br></br>•Certificate of Trust
                <br></br>•Last Will & Testament
              </p>
            </section>
            <section className={classes.productCardSection2Right}>
              <p className={classes.productSectionText}>
                • Financial Power of Attorney
                <br></br>•Healtcare Power of Attorney
                <br></br>•Living Will
                <br></br>•Advance Directives
                <br></br>•Online Funding Kits
                <br></br>•Unlimited Funding Letters
                <br></br>•Online Document Vault*
                <br></br>•Unliminted Restatements*
                <br></br>•1st year account subscription
                <br></br>•included ($29.95 value)
              </p>
            </section>
          </section>
          <section className={classes.productCardSection3}>
            <a
              href={
                "https://www.estatedocspro.com/free_trial.php?type=delta&a=Victor"
              }
              className={classes.productSectionBtn}
            >
              Buy Now
            </a>
          </section>
        </div>
      </div>
      <div className={classes.benefitsContainer}>
        <div className={classes.benefitsTitle}>Benefits</div>
        <section className={classes.benefitsCard}>
          <div className={classes.benefitsCardLeft}>
            <ThumbUpIcon sx={sx} />
          </div>
          <div className={classes.benefitsCardRight}>
            <h2>EASY: Built for you and me</h2>
            <p>
              We hate &apos;legalese&apos;. It is an un-needed barrier between
              you and your plan. We work in plain English, just like you! Follow
              a simple step by step interview with &apos;pop-up help&apos;.
            </p>
          </div>
        </section>
        <section className={classes.benefitsCard}>
          <div className={classes.benefitsCardLeft}>
            <UpdateIcon sx={sx} />
          </div>
          <div className={classes.benefitsCardRight}>
            <h2>FAST: No more waiting</h2>
            <p>
              You could be printing your plan in about an hour. Our
              revolutionary technology streamlines the interview process and our
              servers compile your documents as your comlet questions.
            </p>
          </div>
        </section>
        <section className={classes.benefitsCard}>
          <div className={classes.benefitsCardLeft}>
            <MonetizationOnIcon sx={sx} />
          </div>
          <div className={classes.benefitsCardRight}>
            <h2>AFFORDABLE</h2>
            <p>
              Our technology saves you money by spreading the cost of hiring
              expert estate planning attorneys across thousands of users. Plus
              FREE updates with an active account.
            </p>
          </div>
        </section>
        <section className={classes.benefitsCard}>
          <div className={classes.benefitsCardLeft}>
            <CallSplitIcon sx={sx} />
          </div>
          <div className={classes.benefitsCardRight}>
            <h2>FLEXIBLE</h2>
            <p>
              Our documents were prepared by estate plannin attorneys with
              decades of experience helping thousands of clients nationwide.
              Every family situation , asset class, and bequest option is at
              your fingertips.
            </p>
          </div>
        </section>
        <section className={classes.benefitsCard}>
          <div className={classes.benefitsCardLeft}>
            <Brightness4Icon sx={sx} />
          </div>
          <div className={classes.benefitsCardRight}>
            <h2>CONVENIENT</h2>
            <p>
              Powered by advanced software, you have immediate access to your
              Comprehensive Estate Plan documents 24/7 from anywhere via the
              internet.
            </p>
          </div>
        </section>
        <section className={classes.benefitsCard}>
          <div className={classes.benefitsCardLeft}>
            <AdminPanelSettingsIcon sx={sx} />
          </div>
          <div className={classes.benefitsCardRight}>
            <h2>PROTECTION: Spendrift Provisions</h2>
            <p>
              Spendrift provisions are included which prevents creditors of any
              beneficiary from touching their share of trust assets
            </p>
          </div>
        </section>
        <section className={classes.benefitsCard}>
          <div className={classes.benefitsCardLeft}>
            <AdminPanelSettingsIcon sx={sx} />
          </div>
          <div className={classes.benefitsCardRight}>
            <h2>PROTECTION:</h2>
            <b>Joint Trust for Children & Grandchildren</b>
            <p>
              If you have children, even grown kids, you have the option of
              creating a sub-trust to hold their assets until they reach a
              certain age or split distributions over time at three different
              ages.
            </p>
          </div>
        </section>
        <section className={classes.benefitsCard}>
          <div className={classes.benefitsCardLeft}>
            <GavelIcon sx={sx} />
          </div>
          <div className={classes.benefitsCardRight}>
            <h2>ATTORNEY DRAFTED</h2>
            <p>
              Documents created by Expert Planning attorneys with decades of
              experience. Our attorneys have worked tirelessly to make sure
              these documents are compliant in all 50 states.
            </p>
          </div>
        </section>
        <section className={classes.benefitsCard}>
          <div className={classes.benefitsCardLeft}>
            <LockPersonIcon sx={sx} />
          </div>
          <div className={classes.benefitsCardRight}>
            <h2>SECURE</h2>
            <p>
              Your information is important to us. We never share your data
              unless you authorize it. All communicaions utilize SHA1/RSA
              2048bit keyed SSL encrypion, all data is encrypted in transit and
              at rest with sensitive date encrypted at 4096 bits.
            </p>
          </div>
        </section>

        <section className={classes.benefitsCard}>
          <div className={classes.benefitsCardLeft}>
            <ReceiptLongIcon sx={sx} />
          </div>
          <div className={classes.benefitsCardRight}>
            <h2>POWERS OF ATTORNEY</h2>
            <p>
              A power of Attorney will give your appointed agent the power to
              make certain decisions on your behalf when you are unable to do
              so. Our comprehensive package includes both Financial and
              Healthcare Power of Attorneysl, Durable HIPPA Statements and a
              Durable Agent Notice.
            </p>
          </div>
        </section>
        <div className={classes.videoContainer}>
          <iframe
            className={classes.productVideo}
            autoPlay
            allowFullScreen
            src="https://player.vimeo.com/video/526003512?app_id=122963"
          />
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default LivingTrustPage;
