import React from "react";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Component/SignUp/SignUp";
import HomePage from "./Component/HomePage/HomePage";
import LoginPage from "./Component/LoginPage/LoginPage.jsx";
import UserWallet from "./Component/UserWallet/UserWallet.jsx";
import ConnectWalletToBuyAProductAProduct from "./Component/ConnectWalletToBuyAProduct/ConnectWalletToBuyAProduct";
import TransactionHistory from "./Component/TransactionHistory/TransactionHistory.jsx";
import CreditYourWallet from "./Component/CreditYourWallet/CreditYourWallet";
import CategoryStore from "./Component/CategoryStore/CategoryStore.jsx";

import MarketPlace from "./Component/MarketPlace/MarketPlace.jsx";
import RealEstate from "./Component/RealEstate/RealEstate";
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/signup" component={SignUp} />
				<Route exct path="/userwallet" component={UserWallet} />
				<Route
					exact
					path="/connectawallettobuyaproduct"
					component={ConnectWalletToBuyAProductAProduct}
				/>
				<Route exact path="/transaction" component={TransactionHistory} />
				<Route exact path="/credityourwallet" component={CreditYourWallet} />
				<Route exact path="/marketplace" component={MarketPlace} />
				<Route exact path="/categorystore/auto" component={CategoryStore} />
				<Route exact path="/categorystore/realestate" component={RealEstate} />
			</Switch>
		</Router>
	);
}

export default App;
