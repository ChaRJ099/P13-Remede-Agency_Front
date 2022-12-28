import React, { useRef } from "react";
import down from "../../Assets/down-chevron.png";
import up from "../../Assets/up-chevron.png";
import pencil from "../../Assets/pencil.png";
import "./dropdown.scss";

const DataLine = (props) => {
  const arrow1 = useRef();
  const arrow2 = useRef();
  const moreInfo = useRef();

  function openClose() {
    arrow1.current.classList.toggle("dropdown__arrow-down_no");
    arrow2.current.classList.toggle("dropdown__arrow-up_yes");
    moreInfo.current.classList.toggle("dropdown-details--open");
  }

  function selectCategory() {
    alert("Select a categories");
  }

  function addNotes() {
    alert("add notes");
  }

  return (
    <div className="transaction-group">
      <div className="dropdown">
        <div className="dropdown__arrow" onClick={openClose}>
          <span className="dropdown__arrow-down" ref={arrow1}>
            <img src={down} alt="arrow down" />
          </span>
          <span className="dropdown__arrow-up" ref={arrow2}>
            <img src={up} alt="arrow up" />
          </span>
        </div>
        <div className="dropdown__date">{props.date}</div>
        <div className="dropdown__description">{props.description}</div>
        <div className="dropdown__amount">{props.amount}</div>
        <div className="dropdown__balance">{props.balance}</div>
      </div>
      <div className="dropdown-details" ref={moreInfo}>
        <p>Transaction Type: {props.transType}</p>
        <p>
          Category: {props.category}{" "}
          <img
            src={pencil}
            alt="pencil"
            className="dropdown-details__pencil"
            onClick={selectCategory}
          />
        </p>
        <p>
          Notes:{" "}
          <img
            src={pencil}
            alt="pencil"
            className="dropdown-details__pencil"
            onClick={addNotes}
          />
        </p>
      </div>
    </div>
  );
};

export default DataLine;
