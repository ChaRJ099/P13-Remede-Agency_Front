import "./account-bloc.scss";
import { useNavigate } from "react-router-dom";

function AccountBloc({ title, amount, amountDescription }) {
  const navigate = useNavigate();

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button
          onClick={() => navigate("/transactions")}
          className="transaction-button"
          type="button"
        >
          View transactions
        </button>
      </div>
    </section>
  );
}

export default AccountBloc;
