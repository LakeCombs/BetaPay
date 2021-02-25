import { Button } from "antd";
import React from "react";
import {Link, useHistory} from 'react-router-dom'
import "./Header.css";
import logo from "../Photo/logo.png"

function Header() {
	return (
		<div className="HeaerHoldder">
			<div className="thehHeaderRightside">
				<img src={logo} className="logo" />
				<h4 className="headerTExt">Why BetaPay</h4>
				<h4 className="headerTExt">How to use BetaPay</h4>
			</div>

			<div className="theHeaerLeftSide">
				<h2 className="headerTExtDeveloper">Developers</h2>
				<h2 className="headerTExtHow">How to use</h2>
				<Button className="botton"><Link to ="/signup">Create an Account</Link></Button>
			</div>
		</div>
	);
}

export default Header;
