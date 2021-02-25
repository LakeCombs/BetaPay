import React, { useState } from "react";
import "./RealEstate.css";
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

// import UserProfileHeader from "../UserProfileHeader/UserProfileHeader";

function RealEstate() {
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

	const CategoriesCard = ({
		name,
		src,
		price,
		company,
		location,
		productId
	}) => {
		return (
			<div className="CardForProduct">
				<img src={src} />
				<div className="productDetails">
					<div className="productKey">
						<h3>product:</h3>
						<h3>Price:</h3>
						<h3>dealer:</h3>
						<h3>location</h3>
						<h3>productID:</h3>
					</div>
					<div className="productValue">
						<h3>{name}</h3>
						<h3>{price}</h3>
						<h3>{company} </h3>
						<h3>{location} </h3>
						<h3>{productId}</h3>
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
						<h2>Real Estate</h2> <input placeholder="find your dream house" />
						<button>Search</button>
					</div>
					<div className="CategoryStore">

						<Link to="/productdescription">
					
						<CategoriesCard
							name="3 bedroom flat"
							src={house}
							price="1.2million"
							company="houses"
							location="lagos island"
							productId="890467362788479"
						/>
							</Link>

						<CategoriesCard
							name="2 bedroom flat"
							src={house}
							price="3.2million"
							company="houses"
							location="ikoyi lagos"
							productId="89046736275235"
						/>
						<CategoriesCard
							name="3 bedroom flat"
							src={house}
							price="12 million"
							company="houses"
							location="banana island"
							productId="8907844736275235"
						/>
						<CategoriesCard
							name="four acres of land"
							src={house}
							price="million"
							company="mike RealEState"
							location="agbara island"
							productId="8167hkkd3627523"
						/>
						<CategoriesCard
							name="self contained apartment"
							src={house}
							price="500k"
							company="Housing RealEState"
							location="festac island"
							productId="816hkkd36752jue5"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RealEstate;
