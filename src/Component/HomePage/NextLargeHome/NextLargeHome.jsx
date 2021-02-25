import React from "react";
import "./NextLevelHome.css";
import pay from "../../Photo/pay.gif";

function NextLargeHome() {
	return (
		<div className="NextLevel">
			<div className="NextLevelLeft">
				<h2>How it work</h2>
				<ul>
					<li>create a free acount</li>
					<li>integrate you transaction with BetaPay</li>
					<li>pay in instalment</li>
					<li>send your money to client</li>
					<li>everybody wins</li>
				</ul>
			</div>
			<div className="NextLevelRight">
				<img src={pay} style={{height:"100%", width:"100%"}} />
			</div>
		</div>
	);
}

export default NextLargeHome;
