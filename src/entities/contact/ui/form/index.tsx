import React from "react";

import classes from "./form.module.scss";
import TextInput from "~/src/shared/ui/inputs/text-input";
import { useContacts } from "~/src/entities/contact/lib/hooks/useContacts.hook";
import { Button } from "~/src/shared/ui/button";

export default function ContactForm() {
  const { formData, handleChange, handleSend } = useContacts();
  return (
    <form action="#" className={`flex-column gap-5 ${classes.form}`}>
      <div className={`${classes.container} flex-column gap-3`}>
        <TextInput
          name="email"
          placholder="Email"
          value={formData.email}
          onChange={(v) => handleChange(v.target.value, "email")}
          className={`${classes.input}`}
          label="Email"
        />
        <TextInput
          name="phone"
          placholder="Phone number"
          value={formData.number}
          onChange={(v) => handleChange(v.target.value, "number")}
          className={`${classes.input}`}
          label="Phone number"
        />
      </div>
      <div>
        <Button typeButton="black" size="12-24" onClick={handleSend}>
          <span className="text-white text-16">Submit</span>
        </Button>
      </div>
    </form>
  );
}
