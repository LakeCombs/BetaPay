import React, { useState } from "react";
import "./UserProfileHeader.css";
import { Icon, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

function UserProfileHeader({sideChange}) {

	return (
		<>
			<div className="WAllentHeader ">
				<div className="togglesider">
					{ sideChange ? (
						<h1 onClick={sideChange}>
							{" "}
							<LeftCircleOutlined />{" "}
						</h1>
					) : (
						<h1 onClick={sideChange}>
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
	);
}

export default UserProfileHeader;
