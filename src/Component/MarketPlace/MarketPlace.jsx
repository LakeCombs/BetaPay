import React, { useState } from "react";
import "./marketPlace.css";
import { Icon, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import Sider from "../Sider/Sider";
import UserProfileHeader from "../UserProfileHeader/UserProfileHeader";
import Auto from "../Photo/—Pngtree—red super s car_4186487.png";

function MarketPlace() {
	const [sideChange, setSideChange] = useState(false);

	const changeEffect = () => {
		return setSideChange(!sideChange);
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
			<Sider sideChange={sideChange} />

			<div className="MarketPlacecontentHolder">
				<UserProfileHeader sideChange={sideChange} />
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
	);
}

export default MarketPlace;
