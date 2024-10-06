import "../Pages.css";
import classes from "./AboutPage.module.css";
import ParentsWithDaugher from "../../assets/parentsWithDaughter.jpg";
const AboutPage = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <h1 className={classes.title}>Welcome to Lionguard financial</h1>{" "}
        <p className={classes.paragraph}>
          As a dedicated life insurance brokerage, We specialize in providing a
          range of life insurance products, from life insurance to final
          expense, catering to your every need. Additionally, We offer annuities
          and living trust services to ensure your future is secure.
        </p>
        <p className={classes.paragraph}>
          Let&apos;s work together to safeguard what matters most to you and
          your loved ones. Your financial protection is my top priority!
        </p>
        <p className={classes.paragraph}>
          At Lionguard financial, we understand that life is unpredictable.
          That&apos;s why we&apos;re dedicated to providing you and your loved
          ones with the peace of mind and financial security you deserve through
          our comprehensive life insurance solutions.
        </p>
        <p className={classes.paragraph}>
          When choosing life insurance, it&apos;s crucial to consider not only
          the price but also the quality of coverage, the financial stability of
          the provider, and the level of customer service offered. With us at
          your corner, you can trust that you&apos;re getting more than just a
          low price – you&apos;re getting a partner dedicated to your financial
          security and well-being.
        </p>{" "}
        <h3>Why Choose Us?</h3>
        <li>
          Tailored Solutions: We believe that one size does not fit all when it
          comes to life insurance. Our experienced team takes the time to
          understand your unique needs, goals, and circumstances to tailor a
          solution that suits you perfectly.
        </li>{" "}
        <li>
          Expert Guidance: Navigating the world of life insurance can be
          daunting. With Lionguard Financial, you&apos;re never alone. Our
          knowledgeable advisors are here to guide you every step of the way,
          providing personalized advice and recommendations to help you make
          informed decisions.
        </li>{" "}
        <li>
          Wide Range of Options: Whether you&apos;re looking for term life
          insurance, whole life insurance, universal life insurance, or
          specialized coverage, we&apos;ve got you covered. We partner with
          leading insurance providers to offer a diverse range of options to
          meet your specific requirements.
        </li>{" "}
        <li>
          Exceptional Service: Your satisfaction is our top priority. From the
          moment you reach out to us to long after your policy is in place, you
          can count on us for unparalleled service and support. We&apos;re
          committed to building lasting relationships with our clients based on
          trust, transparency, and integrity.
        </li>{" "}
        <h3>Get Started Today</h3>
        <p>
          {" "}
          Ready to take the first step towards securing your family&apos;s
          future? Explore our website to learn more about our services, browse
          our range of life insurance products, and get in touch with us to
          schedule a consultation. Your peace of mind is just a click away.
        </p>{" "}
        <p>
          {" "}
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
