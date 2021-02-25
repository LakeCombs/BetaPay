import React from "react";
import "./Footer.css";
import { Carousel } from "antd";
import {Link, useHistory} from 'react-router-dom'
import card from "../../Photo/WWpay.png";

const Contribute = ({ name, src }) => {
	return (
		<div className="contributorHolder">
			<img className="contibutors" src={src} />
			<h5>{name}</h5>
		</div>
	);
};

const FooterColumn = () => {
	return (
		<div className="FooterColumn">
			<center>Header</center>
			<ul>
				<li>the firest</li>
				<li>second</li>
				<li>third</li>
				<li>forth</li>
				<li>fifth</li>
			</ul>
		</div>
	);
};

function Footer() {
	return (
		<div className="FooterContainer">
			<div className="contributorPart">
				<center>contributors and investors</center>
				<center className="carousel">
					<Contribute name="Black" />
					<Contribute name="LocalStorage" />

					<Contribute name="ector" />

					<Contribute name="twain" />
					<Contribute name="yestaday" />
				</center>
			</div>
			<div className="FooterMAIN">
				<div className="FooterFirsts">
					<h1>Create a BetaPay Account and buy yourself a dream</h1>
					<img src={card} />
					<Link to="/signup">
						<button className="botton">Create an Account</button>
					</Link>
				</div>
			</div>
			<div className="FooterSecond">
				{/* <div>
i am the first pat
					</div>
					<div>
						i am the second part
					</div>
					<div>
						i amthe third part
					</div> */}
				<FooterColumn />
				<FooterColumn />

				<FooterColumn />

				<FooterColumn />
			</div>
			<center>developed by tex</center>
		</div>
	);
}

export default Footer;
