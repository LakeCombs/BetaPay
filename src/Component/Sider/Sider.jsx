import React, { useState } from "react";
import "./Sider.css";
import { Icon, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import wallet from "../Photo/Wallet.png";
import history from "../Photo/history.png";
import creditcard from "../Photo/CreditCard.png";
import settings from "../Photo/settin.png";
import logo from "../Photo/BetaPay.png";
import piggy from "../Photo/piggy.gif";
import product from "../Photo/product.png";

function Sider({SideChange}) {
	const [sider, setSider] = useState(false);

	// const SideChange = () => {
	// 	return setSider(!sider);
	// };

	const Side1 = () => {
		return (
			<>
			<div className="Sider1">
				<div className="logo">
					<img src={logo} />
				</div>

				<div className="sidercontent">
					<img src={wallet} />
					<h3>Wallet</h3>
				</div>
				<div className="sidercontent">
					<img src={creditcard} />
					<h3>Credit card</h3>
				</div>
				<div className="sidercontent">
					<img src={history} />
					<h3>History</h3>
				</div>
				<div className="sidercontent">
					<img src={settings} />
					<h3>Settings</h3>
				</div>
			</div>
			</>
		);
	};

	const Side2 = () => {
		return (
			<div className="Sider">
				<h4 className="logoTExt">BetaPay</h4>
				<img src={wallet} />
				<img src={creditcard} />
				<img src={history} />
				<img src={settings} />
			</div>
		);
	};

	return <>{sider ? <Side1 /> : <Side2 />}</>;
}

export default Sider;
