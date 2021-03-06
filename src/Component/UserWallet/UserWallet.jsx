import React, { useState } from "react";
import "./UserWallet.css";
import { Link, useHistory } from "react-router-dom";
import { Icon, Button } from "antd";
import UserProfileHeader from "../UserProfileHeader/UserProfileHeader";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import wallet from "../Photo/Wallet.png";
import history from "../Photo/history.png";
import creditcard from "../Photo/CreditCard.png";
import settings from "../Photo/settin.png";
import logo from "../Photo/BetaPay.png";
import piggy from "../Photo/piggy.gif";
import product from "../Photo/product.png";

function UserWallet() {
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

	const RecentBuy = () => {
		return (
			<div className="RecentBuy">
				<img className="ProductImage" src={product} />
				<h4 className="sellerNAME">SellerName</h4>
				<h5 className="price">
					Price:<h5>0.00</h5>
				</h5>
				<h5 className="AmountPaid">
					Amount Paid:<h5>0.00</h5>
				</h5>
				<h5 className="Balance">
					Balance:<h5>0.00</h5>
				</h5>
				<Button>Pay Now</Button>
			</div>
		);
	};

	return (
		<div className="userwallet">
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

				<div className="walletcontent">
					<div className="WalletcontentFirstPart">
						<div className="walletWelcomeMessage">
							<h1>hello NameOfUser</h1>
							<h3>
								This is your transaction wallet what will you like to do today
							</h3>

							<Button>
								<Link to="/connectawallettobuyaproduct">
									Connect Wallet to buy a Product{" "}
								</Link>
							</Button>

							<Button>
								<Link>Pay Installment for Product</Link>
							</Button>
							<Button>
								<Link>Credit Your wallet</Link>
							</Button>
						</div>
						<div className="Walletpiggy">
							<img src={piggy} className="piggy" />
						</div>
					</div>
					<h3 className="recent">
						<label>Recent Purchase</label>
					</h3>

					<div className="useWalletSEcondPart">
						<div className="UserWalletleft">
							<RecentBuy />
							<RecentBuy />
							<RecentBuy />
							<RecentBuy />
							<RecentBuy />
							<RecentBuy />
							<RecentBuy />
							<RecentBuy />
							<RecentBuy />
						</div>
						<div className="UserWalletright"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserWallet;
