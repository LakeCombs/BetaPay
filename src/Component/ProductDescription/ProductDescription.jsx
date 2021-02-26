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

	const ProductImage = ({ description, src }) => {
		return (
			<div className="ProductImage">
				<img src={src} />
				<h3>{description}</h3>
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
							<Link to="/markproductDescriptionetplace" className="Link">
								market place
							</Link>
							<div className="UserProfile">
								<h3>name</h3>
								<img />
							</div>
						</div>
					</div>
				</>
				<div className="productDescription">
					<h2>Product name</h2>
					<div className="productImageHolder">
						<ProductImage description="Sitting Room" />
						<ProductImage description="bathroom" />
						<ProductImage description="kitchen" />
						<ProductImage description="tiolet" />
					</div>
					<div className="productDescriptionDetails">
						<h2>product description</h2>
						<div className="theMainDescription">
							<div className="extradetails">
								<h3>Type: Four bed room flat</h3>
								<h3>
									Features:Sitting Room,4 bed room ,swimming pool, dinner, a
									garage, a garden, a boys quarter
								</h3>
								<h3>Location:Banana island</h3>
								<h3>hello lakes</h3>
							</div>
							<hr className="verticalLine" />
							<div className="extradetails">
								<h3> i am fine oh!</h3> <h4> i am fine oh!</h4>
								<h3> i am fine oh!</h3>
								<h3> i am fine oh!</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDescription;
