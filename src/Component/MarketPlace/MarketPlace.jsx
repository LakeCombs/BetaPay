import React, { useState } from "react";
import "./marketPlace.css";
import { Icon, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import UserProfileHeader from "../UserProfileHeader/UserProfileHeader";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import wallet from "../Photo/Wallet.png";
import history from "../Photo/history.png";
import creditcard from "../Photo/CreditCard.png";
import settings from "../Photo/settin.png";
import logo from "../Photo/BetaPay.png";
import piggy from "../Photo/piggy.gif";
import product from "../Photo/product.png";
import Auto from "../Photo/—Pngtree—red super s car_4186487.png";

function MarketPlace() {
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

	const CategoriesCard = ({ categories, src }) => {
		return (
			<div className="categoresCardHolder">
				<div className="CategoresCardImageHolder">
					<img src={src} />
				</div>
				<h3>{categories}</h3>
			</div>
		);
	};

	return (
		<div className="MarketPlace">
			<>{sider ? <Side1 /> : <Side2 />}</>
			<div className="TheWAlletcotent">
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

				<div className="MarketPlacecontentHolder">
					{/* <UserProfileHeader sideChange={sideChange} /> */}
					<div className="MarketPlaceContent">
						<h2>Categories</h2>
						<div className="categoriesCardHolder">
							<Link to="/categorystore/auto">
								<CategoriesCard categories="automobile" src={Auto} />
							</Link>
							<Link to="/categorystore/realestate">
								<CategoriesCard categories="real estate" />
							</Link>

							<CategoriesCard categories="agricultural Product" />
							<CategoriesCard categories="jewelries" />
							<CategoriesCard categories="Intellectual property" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MarketPlace;
