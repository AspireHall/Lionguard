import classes from "./AboutPage.module.css";
import ParentsWithDaugher from "../../assets/parentsWithDaughter.jpg";
const AboutPage = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <h1 className={classes.lionGuard}>Why Lionguard financial</h1>
        <div className={classes.bodyContainer}>
          <p className={classes.paragraph}>
            As a dedicated life insurance brokerage, We specialize in providing
            a range of life insurance products, from life insurance to final
            expense, catering to your every need. Additionally, We offer
            annuities and living trust services to ensure your future is secure.
          </p>
          <p className={classes.paragraph}>
            Let&apos;s work together to safeguard what matters most to you and
            your loved ones. Your financial protection is my top priority!
          </p>
          <p className={classes.paragraph}>
            At Lionguard financial, we understand that life is unpredictable.
            That&apos;s why we&apos;re dedicated to providing you and your loved
            ones with the peace of mind and financial security you deserve
            through our comprehensive life insurance solutions.
          </p>
          <p className={classes.paragraph}>
            When choosing life insurance, it&apos;s crucial to consider not only
            the price but also the quality of coverage, the financial stability
            of the provider, and the level of customer service offered. With us
            at your corner, you can trust that you&apos;re getting more than
            just a low price – you&apos;re getting a partner dedicated to your
            financial security and well-being.
          </p>
        </div>
        <h1>Why Choose Us?</h1>
        <div className={classes.cardContainer}>
          <div className={classes.card}>
            <div className={classes.cardGradient}></div>
            <h1 className={classes.cardTitle}>Tailored Solutions:</h1>
            <p className={classes.cardText}>
              We understand that life insurance isn&apos;t a one-size-fits-all
              solution. Our dedicated team takes the time to assess your
              individual needs, aspirations, and circumstances to craft a
              personalized plan that aligns with your unique situation.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardGradient}></div>
            <h1 className={classes.cardTitle}>Expert Guidance:</h1>
            <p className={classes.cardText}>
              Navigating life insurance can feel overwhelming, but with
              Lionguard Financial, you&apos;re in good hands. Our expert
              advisors are by your side throughout the process, offering
              personalized guidance and tailored recommendations to help you
              make well-informed choices with confidence.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardGradient}></div>
            <h1 className={classes.cardTitle}>Wide Range of Options:</h1>
            <p className={classes.cardText}>
              Whether you&apos;re seeking term, whole, universal life insurance,
              or specialized coverage, we have the right solution for you. By
              partnering with top insurance providers, we offer a wide array of
              options designed to meet your unique needs and preferences.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardGradient}></div>
            <h1 className={classes.cardTitle}>Exceptional Service:</h1>
            <p className={classes.cardText}>
              Your satisfaction is our highest priority. From the first time you
              connect with us to long after your policy is in place, you can
              rely on us for exceptional service and ongoing support. We&apos;re
              dedicated to fostering lasting relationships built on trust,
              transparency, and integrity.
            </p>
          </div>
        </div>
        <h3 className={classes.title}>Get Started Today</h3>
        <p className={classes.paragraph}>
          Ready to take the first step towards securing your family&apos;s
          future? Explore our website to learn more about our services, browse
          our range of life insurance products, and get in touch with us to
          schedule a consultation. Your peace of mind is just a click away.
        </p>
        <p className={classes.paragraph}>
          Thank you for considering us as your trusted partner in life
          insurance. We look forward to serving you!
        </p>
      </div>
      <div className={classes.rightContainer}>
        <img className={classes.image} src={ParentsWithDaugher} />
      </div>
    </div>
  );
};

export default AboutPage;
