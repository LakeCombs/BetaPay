import React from "react";
import "./HeaderLarge.css";
import {Link, useHistory} from "react-router-dom"
import payGif from "../../Photo/paymentconnection.gif";

function HeaderLarge() {
	return (
		<div>
			<div className="LargeImagecontainer">
				<div className="LargeRightside">
					<h1 className="betapay">BetaPay</h1>
					<h2 className="getNow">Get Now Pay Later</h2>
					<h4 className="story">BetaPay help you get that dream on credit</h4>
					<Link to="/signup" >
					<button className="ButtonAccout">create an Account</button>
					</Link>
					
				</div>
				<div className="LargeLeftside">
					<img src={payGif} />
				</div>
			</div>
			<div className="theLargeHederFoter">
				BetaPay a payment system you can trust
			</div>
		</div>
	);
}
export default HeaderLarge;
