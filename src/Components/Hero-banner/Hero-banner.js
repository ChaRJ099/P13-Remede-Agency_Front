import "./hero-banner.scss";

function HeroBanner() {
  return (
    <div className="slogan-container">
      <h2 className="sr-only">Promoted Content</h2>
      <p className="slogan__subtitle">No fees.</p>
      <p className="slogan__subtitle">No minimum deposit.</p>
      <p className="slogan__subtitle">High interest rates.</p>
      <p className="slogan__text">
        Open a savings account with Argent Bank today!
      </p>
    </div>
  );
}

export default HeroBanner;
