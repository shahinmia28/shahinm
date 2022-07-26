import "./footer.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const FormPage = () => {
  const form = useRef();
  const [confirm, setConfirm] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_erf7xtr",
        "template_a3bkxmc",
        form.current,
        "jkYs_JR56BJQ6vazO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setConfirm("Thanks for Your message. We will contact you if necessary.");
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} className="p-2">
          <h3>Contact</h3>
          <input
            type="text"
            name="name"
            className="form-control my-3"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="email"
            className="form-control my-3"
            placeholder="example@email.com"
            required
          />

          <textarea
            name="message"
            className="form-control my-3"
            placeholder="Write your massage here"
            rows={4}
            required
          />
          <p className="my-3 text-muted">{confirm}</p>
          <input type="submit" value="Send" className="btn btn-info" />
        </form>
      </div>
    </div>
  );
};

export default FormPage;
