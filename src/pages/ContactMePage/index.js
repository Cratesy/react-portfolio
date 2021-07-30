import ContactMe from "../../components/ContactMe";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactMePage = () => {
  return (
    <div className="main-content">
      <h2 className="contact-me">
        <a href="https://github.com/Cratesy">
          <i className="logo">
            <FaGithub title="Github" />
          </i>
        </a>
        - Contact Me -
        <a href="https://www.linkedin.com/in/michael-crates-538752200/">
          <i className="logo">
            <FaLinkedin title="LinkedIn" />
          </i>
        </a>
      </h2>
      <ContactMe />
    </div>
  );
};

export default ContactMePage;
