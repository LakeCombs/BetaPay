import React from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import HeaderLarge from "./HeaderLargeImagePart/HeaderLarge";
import NextLevelHome from "./NextLargeHome/NextLargeHome.jsx"
import HomeBusinessDetails from "./HomeBuinessDEtails/HomeBusinessDetails";
import HomeRemain from "./HomeRemain/HomeRemain.jsx";
import Footer from './Footer/Footer.jsx'


function HomePage() {
	return (
		<div>
			<Header />
            <HeaderLarge/>
			<NextLevelHome/>
			<HomeBusinessDetails />
			<HomeRemain/>
			<Footer/>
		</div>
	);
}

export default HomePage;
