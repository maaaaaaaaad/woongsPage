import React from "react";
import Map from "../components/Contact/Map/Map";
import "./css/contact.css";

const Contact: React.FC = (props) => {
  return (
    <section className="contact__section">
      <Map></Map>
    </section>
  );
};

export default Contact;
