import React, { useState } from "react";
import "./RealEstate.css"
import { Icon, Menu, Dropdown, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import Sider from "../Sider/Sider";
import house from "../Photo/house1.jpg"

import UserProfileHeader from "../UserProfileHeader/UserProfileHeader";

function RealEstate() {
	const [sideChange, setSideChange] = useState(false);

	const changeEffect = () => {
		return setSideChange(!sideChange);
	};

	const CategoriesCard = ({ name, src, price }) => {
		return (
			<Button className="CardForProduct1">
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
							<h3>Housing </h3>
							<h3>18894678397979</h3>
						</div>
					</div>
				</div>
			</Button>
		);
	};

	return (
		<div className="MarketPlace">
			<Sider sideChange={sideChange} />

			<div className="MarketPlacecontentHolder">
				<UserProfileHeader sideChange={sideChange} />
				<div className="MarketPlaceContent">
					<h2>Real Estate</h2>
					<div className="CategoryStore">
						<Dropdown overlay={menu} placement="bottomCenter" arrow>
							<CategoriesCard name="camry 2.0" src={house} />
						</Dropdown>
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

export default RealEstate;
