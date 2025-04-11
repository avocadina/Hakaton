import React from "react";

import classes from "./contacts.module.scss";
import ContactForm from "./form";

export default function Contacts() {
  return (
    <section className={classes.section} id="contacts">
      <div className="wrapper">
        <div className={`${classes.container} flex-column gap-5`}>
          <div className="flex-column gap-1 flex-start">
            <h2 className="text-24 text-white font-bold uppercase">
              Contact Information
            </h2>
            <h3 className="text-12 text-gray">
              We will contact you by mail provided in the form
            </h3>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
