import React from "react";
import vector from "../assets/Vector.svg";
import ContactDetails from "../components/ContactDetails";
import "../style/contact.css";
const Contact = () => {
  return (
    <>
      <div className='home'>
        <div className='vector_right'>
          <div className='main'>
            <ContactDetails />
          </div>
        </div>
        <img src={vector} alt='' className='vector' />
      </div>
    </>
  );
};

export default Contact;
