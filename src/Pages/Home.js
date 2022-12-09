import React from "react";
import "./home.scss";
// import { NavLink } from "react-router-dom";
import NavHome from "../Components/Nav-home/Nav-home";
import HeroBanner from "../Components/Hero-banner/Hero-banner";
import FeatureItem from "../Components/Feature-item/Feature-item";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <NavHome />
      <main>
        <section className="hero">
          <HeroBanner />
        </section>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
