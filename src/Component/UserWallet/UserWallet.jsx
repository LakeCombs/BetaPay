import React, { useState } from "react";
import "./UserWallet.css";
import { Link, useHistory } from "react-router-dom";
import { Icon, Button } from "antd";
import UserProfileHeader from "../UserProfileHeader/UserProfileHeader";
import Sider from "../Sider/Sider"
import piggy from "../Photo/piggy.gif";
import product from "../Photo/product.png";

function UserWallet() {
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
			<Sider />

			<div className="TheWAlletcotent">
				<UserProfileHeader />

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
