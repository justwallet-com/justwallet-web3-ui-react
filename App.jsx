
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import EXCHANGE from "./components/EXCHANGE";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|exchange)">
          <EXCHANGE {...eXCHANGEData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const eXCHANGEData = {
    signUp1: "BUY CRYPTO",
    signUp2: "DASHBOARD",
    signUp3: "HELP",
    signUp4: "CARDS",
    signUp5: "EXCHANGE",
    signUp6: "WITHDRAWAL",
    signUp7: "ACCOUNT",
    exchange1: "EXCHANGE",
    bitcoin2: "Bitcoin",
    spanText1: "0,07512 BTC ",
    spanText2: "($874.30 USD)",
    receive: "RECEIVE",
    jusd1: "JUSD",
    address: "1 BTC= 49,230.12JUSD",
    text1: "0.01666949",
    btc: "BTC",
    text2: "210.36",
    price1: "USD",
    text3: "205.15",
    jusd2: "JUSD",
    text4: "205.15",
    price2: "USD",
    inLibrary1: "Half",
    inLibrary2: "Min",
    appleMusic: "Max",
    youAreExchanging: "YOU ARE EXCHANGING",
    spanText3: "0.01666949 ",
    spanText4: "BTC",
    x21036Usd: "$210.36USD",
    youWillReceive: "YOU WILL RECEIVE",
    spanText5: "205.15",
    spanText6: "JUSD",
    x20515Usd: "$205.15 USD",
    exchange2: "EXCHANGE",
    viewHistory: "VIEW HISTORY",
};

