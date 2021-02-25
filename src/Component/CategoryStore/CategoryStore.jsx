import React, { useState } from "react";
import "./CategoryStore.css";
import { Icon, Menu, Dropdown, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import Sider from "../Sider/Sider";
import car1 from "../Photo/benz.jpg";
import wallet from "../Photo/Wallet.png";
import history from "../Photo/history.png";
import creditcard from "../Photo/CreditCard.png";
import settings from "../Photo/settin.png";
import logo from "../Photo/BetaPay.png";

import UserProfileHeader from "../UserProfileHeader/UserProfileHeader";

function CategoryStore() {
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

	const CategoriesCard = ({ name, src, price }) => {
		return (
		
				<div className="CardForProduct">
					<img src={src} />
					<div className="productDetails">
						<div className="productKey">
							<h3>product:</h3>
							<h3>Amount:</h3>
							<h3>dealer:</h3>
							<h3>productID:</h3>
						</div>
						<div className="productValue">
							<h3>camry</h3>
							<h3>2.1million</h3>
							<h3>amy motors</h3>
							<h3>18894678397979</h3>
						</div>
					</div>
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
					<div className="headerPart">
						<h2>Auto Shop</h2> <input placeholder="find your dream car" />
						<button>Search</button>
					</div>
					<div className="CategoryStore">
						<CategoriesCard name="camry 2.0" src={car1} />
						<CategoriesCard />
						<CategoriesCard />
						<CategoriesCard />
						<CategoriesCard />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CategoryStore;
