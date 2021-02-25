import React, { useState } from "react";
import "../UserWallet/UserWallet.css";
import { Icon, Button } from "antd";
import { Link, useHistory } from "react-router-dom";

import "./connectAWalletToBuyAProduct.css";
import Sider from "../Sider/Sider";
import UserProfileHeader from "../UserProfileHeader/UserProfileHeader";

function ConnectWalletToBuyAProduct() {
	return (
		<div className="userwallet">
			<Sider />

			<div className="walletcontent1">
				<UserProfileHeader />

				<div className="walletcontentHolder">
					<div className="WalletcontentFirstPart1">
						<div className="walletWelcomeMessage">
							<h1>hello NameOfUser</h1>
							<h3>
								This is your transaction wallet what will you like to do today
							</h3>
							<Button>Connect Wallet to buy a Product</Button>
							<Button>Pay Installment for Product</Button>
							<Button>Credit Your wallet</Button>
						</div>
						<div className="connecttowallet">
							<label>Connect to Product</label>
							<input
								className="inputfield"
								type="text"
								placeholder="enter marchant name"
							/>
							<input
								className="inputfield"
								type="text"
								placeholder="enter product id"
							/>
							<input
								className="inputfield"
								type="text"
								placeholder="tranaction code"
							/>
							<input
								className="inputfield"
								type="number"
								placeholder="#Prize"
							/>
							<input
								className="inputfield"
								type="text"
								placeholder="request a security token"
							/>
							<Button className="inputfield">Search Product</Button>
						</div>
					</div>
					<h3 className="productDisplaySession">
						<image className="ProductDisplay" />
						<div className="ProductOption">
							<input
								className="priductDetails"
								disabled
								placeholder="Name Of Product"
							/>
							<input
								className="priductDetails"
								disabled
								placeholder="Name Of Marchant"
							/>
							<input
								className="priductDetails"
								disabled
								placeholder="Prize of product"
							/>

							<Button className="priductDetails1">Connect Now</Button>
						</div>
					</h3>
				</div>
			</div>
		</div>
	);
}

export default ConnectWalletToBuyAProduct;
