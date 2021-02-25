import React, { useState } from "react";
import "./ProductDescription.css";
import { Icon, Menu, Dropdown, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import Sider from "../Sider/Sider";
import house from "../Photo/house1.jpg";
import wallet from "../Photo/Wallet.png";
import history from "../Photo/history.png";
import creditcard from "../Photo/CreditCard.png";
import settings from "../Photo/settin.png";
import logo from "../Photo/BetaPay.png";

function ProductDescription() {
	const [sider, setSider] = useState(false);

	const SideChange = () => {
		return setSider(!sider);
	};

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

	return (
		<div className="MarketPlace">
			<>{sider ? <Side1 /> : <Side2 />}</>

			<div className="MarketPlacecontentHolder">
				<>
					<div className="WAllentHeader ">
						<div className="togglesider">
							{sider ? (
								<h1 onClick={SideChange}>
									{" "}
									<LeftCircleOutlined />{" "}
								</h1>
							) : (
								<h1 onClick={SideChange}>
									{" "}
									<RightCircleOutlined />
								</h1>
							)}
						</div>
						<div className="theToper">
							<h3>Trasaction History</h3>
							<h3>Send payment</h3>
							<h3>notification</h3>
							<Link to="/marketplace" className="Link">
								market place
							</Link>
							<div className="UserProfile">
								<h3>name</h3>
								<img />
							</div>
						</div>
					</div>
				</>
				<div className="MarketPlaceContent">
	
<h2>hello lakes</h2>
				</div>
			</div>
		</div>
	);
}

export default ProductDescription;