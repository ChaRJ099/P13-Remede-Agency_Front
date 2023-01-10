import "./account-bloc.scss";

function AccountBloc({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-group">
        <h3 className="account-group__title">{title}</h3>
        <p className="account-group__amount">{amount}</p>
        <p className="account-group__description">{description}</p>
      </div>
      <div className="account-group account-group__button-container">
        <button className="account-group__button" type="button">
          View transactions
        </button>
      </div>
    </section>
  );
}

export default AccountBloc;
