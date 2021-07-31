import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import Button from "../Button";

import "./index.css";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("xwkarole");
  if (state.succeeded) {
    return <p>Thanks for your message, will respond ASAP!</p>;
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input
          className="input-box"
          id="email"
          type="email"
          name="email"
          placeholder="Email here!"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <textarea
          className="input-box message"
          id="message"
          name="message"
          placeholder="Message here!"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <Button type="submit" disabled={state.submitting} name="Submit" />
    </form>
  );
};

export default ContactMe;
