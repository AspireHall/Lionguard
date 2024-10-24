import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("Contact_Us", "Contact_Us", form.current, {
        publicKey: "vYB9ERoSaXAaNuMgO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      state: "",
      age: "",
      agentname: "",
      message: "",
    });
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    state: "",
    age: "",
    agentname: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className={classes.formContainer} ref={form} onSubmit={sendEmail}>
      <section className={classes.formSection}>
        <div className={classes.formSectionDivLeft}>
          <label className={classes.inputText} htmlFor="firstname">
            First Name:
          </label>
          <input
            className={classes.input}
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            placeholder="required"
          />
        </div>
        <div className={classes.formSplit}></div>
        <div className={classes.formSectionDivRight}>
          <label className={classes.inputText} htmlFor="lastname">
            Last Name:
          </label>
          <input
            className={classes.input}
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
            placeholder="required"
          />
        </div>
      </section>
      <section className={classes.formSection}>
        <label className={classes.inputText} htmlFor="email">
          Email:
        </label>
        <input
          className={classes.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="required"
        />
      </section>

      <section className={classes.formSection}>
        <label className={classes.inputText} htmlFor="state">
          State:
        </label>
        <input
          className={classes.input}
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </section>
      <section className={classes.formSection}>
        <label className={classes.inputText} htmlFor="age">
          Age:
        </label>
        <input
          className={classes.input}
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </section>
      <section className={classes.sectionBreak}>
        if you&apos;re already working with an agent provide name below
      </section>
      <section className={classes.formSection}>
        <label className={classes.inputText} htmlFor="agentname">
          Agent&apos;s Name:
        </label>
        <input
          className={classes.input}
          type="text"
          id="agentname"
          name="agentname"
          value={formData.agentname}
          onChange={handleChange}
        />

        <div className={classes.formSplit}></div>
      </section>
      <section className={classes.formSectionMessage}>
        <label className={classes.inputText} htmlFor="message">
          Message:
        </label>
        <textarea
          className={classes.message}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="required"
        />
      </section>
      <button className={classes.submitBtn} value="Send" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
