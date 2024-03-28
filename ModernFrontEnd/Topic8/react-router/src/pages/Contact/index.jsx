import React from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/ContactForm";
import ContactInfo from "../../components/ContactInfo";

function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Contact Sehifesi";

    return () => {
      console.log("Contactdan cixdi...");
    };
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Contact</h1>

      <div>
        <h2>Personal1</h2>
        <button onClick={() => navigate(`/contact/${102}`)}>Read</button>
      </div>
      <div>
        <h2>Personal2</h2>
        <button onClick={() => navigate(`/contact/${205}`)}>Read</button>
      </div>
      <div>
        <h2>Personal3</h2>
        <button onClick={() => navigate(`/contact/${210}`)}>Read</button>
      </div>
      <ContactInfo />
      <ContactForm title="Contact us Form" />
    </div>
  );
}

export default Contact;
