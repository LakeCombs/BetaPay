
import "./TransactionHistory.css"
import React, { useState } from "react";
import "../UserWallet/UserWallet.css";
import { Icon, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import wallet from "../Photo/Wallet.png";
import history from "../Photo/history.png";
import creditcard from "../Photo/CreditCard.png";
import settings from "../Photo/settin.png";
import logo from "../Photo/BetaPay.png";
import piggy from "../Photo/piggy.gif";
import product from "../Photo/product.png";

function TransactionHistory() {
    const [sider, setSider] = useState(false);

	const SideChange = () => {
		return setSider(!sider);
	};
    return (
        <div className="userwallet">
            			{sider ? (
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
			) : (
				<div className="Sider">
					{/* <img src={logo} className="logo"/> */}
					<h4 className="logoTExt">BetaPay</h4>
					<img src={wallet} />
					<img src={creditcard} />
					<img src={history} />
					<img src={settings} />
				</div>
			)}
         
			<div className="TheWAlletcotent">
            <div className="WAllentHeader">
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
						<h3>
							{" "}
							<Link to="/transaction">Trasaction History</Link>
						</h3>
						<h3>Send payment </h3>
						<h3>notification</h3>
						<h3>help</h3>
						<div className="UserProfile">
							<h3>name</h3>
							<img />
						</div>
					</div>
                    <div className="walletcontent">

                    </div>
				</div>

            </div>
        </div>
    )
}

export default TransactionHistory
