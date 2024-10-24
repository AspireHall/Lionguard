import ContactForm from "./ContactForm";
import classes from "./ContactPage.module.css";
import family from "../../assets/familyupbaby.jpg";

const ContactPage = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.leftContainer}>
          <div className={classes.header}>
            <h1 className={classes.title}>Question? Get in Touch!</h1>
            <p className={classes.text}>
              Ready to secure your family&apos;s future? Contact us today to
              expore customizable life insurance options tailored to your needs.
              Your peace of mind starts here
            </p>
          </div>
          <ContactForm />
        </div>
        <div className={classes.rightContainer}>
          <img className={classes.image} src={family} alt="family" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
