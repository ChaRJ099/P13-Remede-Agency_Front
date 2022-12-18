import React from "react";
import "./sign-in.scss";
import NavHome from "../../Components/Nav-home/Nav-home";
import "../../Components/ContactForm/ContactForm";
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Components/ContactForm/ContactForm";

function SignIn() {
  return (
    <>
      <NavHome />
      <main className="main bg-dark">
        <section>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
