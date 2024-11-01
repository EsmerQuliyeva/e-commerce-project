import React from "react";
import ContactContent from "../Components/Contact/ContactContent/ContactContent";
import ContactIntroduction from "../Components/Contact/ContactIntroduction/ContactIntroduction";
import Services from "../Components/Shop/Services/Services";
import Footer from "../Components/Footer/Footer";

const Contact = () => {
  return (
    <div>
      <ContactIntroduction />
      <ContactContent />
      <Services />
      <Footer />
    </div>
  );
};

export default Contact;
