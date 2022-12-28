import "./feature-item.scss";
import IconChat from "../../Assets/icon-chat.png";

function FeatureItem() {
  return (
    <div className="feature-container">
      <img src={IconChat} alt="Chat Icon" className="feature__icon" />
      <h3 className="feature__title">You are our #1 priority</h3>
      <p>
        Need to talk to a representative? You can get in touch through our 24/7
        chat or through a phone call in less than 5 minutes.
      </p>
    </div>
  );
}

export default FeatureItem;
