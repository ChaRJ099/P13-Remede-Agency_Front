import React from "react";
import "./transactions.scss";
import NavHome from "../../Components/Nav-home/Nav-home";
import AccountBloc from "../../Components/AccountBloc/AccountBloc";
import Dropdown from "../../Components/Dropdown/dropdown";
import Footer from "../../Components/Footer/Footer";

function User() {
  return (
    <div className="transactions-container">
      <NavHome />

      <main
        id="transpage"
        className="transactions-main transactions-main--bg-dark"
      >
        <AccountBloc />
        <div className="transactions-list__header">
          <div id="date" className="transactions-list__item">
            DATE
          </div>
          <div id="descr" className="transactions-list__item">
            DESCRIPTION
          </div>
          <div id="amount" className="transactions-list__item">
            AMOUNT
          </div>
          <div id="balance" className="transactions-list__item">
            BALANCE
          </div>
        </div>
        <Dropdown
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$5.00"
          balance="$2082.79"
          transType="Electronic"
          category="Food"
        />
        <Dropdown
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$10.00"
          balance="$2087.79"
          transType="Electronic"
          category="Food"
        />
        <Dropdown
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$20.00"
          balance="$2097.79"
          transType="Electronic"
          category="Food"
        />
        <Dropdown
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$30.00"
          balance="$2117.79"
          transType="Electronic"
          category="Food"
        />
        <Dropdown
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$40.00"
          balance="$2147.79"
          transType="Electronic"
          category="Food"
        />
        <Dropdown
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="$50.00"
          balance="$2187.79"
          transType="Electronic"
          category="Food"
        />
      </main>
      <Footer />
    </div>
  );
}

export default User;
