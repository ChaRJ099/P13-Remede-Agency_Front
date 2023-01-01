import React from "react";
import "./sign-in.scss";
import NavVisitor from "../../Components/Nav-visitor/Nav-visitor";
import "../../Components/ContactForm/ContactForm";
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Components/ContactForm/ContactForm";

function SignIn() {
  return (
    <>
      <NavVisitor />
      <main className="signin-main signin-main--bg-dark">
        <section>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
