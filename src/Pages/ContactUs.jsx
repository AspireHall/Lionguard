import { Link } from "react-router-dom";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <>
      <Link className={classes.contactUsFooter} to="/contact">
        <ContactPageIcon sx={{ width: "75px", height: "75px" }} />
        Contact Us for a Free Quote
      </Link>
    </>
  );
};

export default ContactUs;
