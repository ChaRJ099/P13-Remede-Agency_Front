import "./feature-item.scss";

function FeatureItem(props) {
  return (
    <div className="feature-container">
      <img src={props.img} alt="Chat Icon" className="feature__icon" />
      <h3 className="feature__title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default FeatureItem;
