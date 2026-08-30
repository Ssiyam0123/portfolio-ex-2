import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <section id="contact" className="py-20 max-w-[1200px] mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan mb-8 md:mb-12 text-center font-extrabold uppercase tracking-wider">
        Contact Me
      </h2>
      <div className="flex justify-between gap-12 lg:gap-20 bg-white/5 border border-white/5 p-8 md:p-12 rounded-[32px] backdrop-blur-md shadow-2xl lg:flex-row flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </section>
  );
};

export default ContactMeMain;
