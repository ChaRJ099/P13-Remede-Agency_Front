import React from "react";
import "./home.scss";
import IconChat from "../../Assets/icon-chat.png";
import IconMoney from "../../Assets/icon-money.png";
import IconSecurity from "../../Assets/icon-security.png";
import NavVisitor from "../../Components/Nav-visitor/Nav-visitor";
import HeroBanner from "../../Components/Hero-banner/Hero-banner";
import FeatureItem from "../../Components/Feature-item/Feature-item";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="home-container">
      <NavVisitor />
      <main className="home-main">
        <section className="hero">
          <HeroBanner />
        </section>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
            img={IconChat}
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. "
          />
          <FeatureItem
            img={IconMoney}
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureItem
            img={IconSecurity}
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
