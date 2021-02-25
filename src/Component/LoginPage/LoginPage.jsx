import React from "react";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";

function LoginPage() {
	return (
		<div className="LoginPage">
			<center className="Sign">Login to your BetaPay Wallet </center>
			<center className="SignInPlatform">
				<form className="Form" type="submit">
					<label>Username:</label>
					<input type="text" required />

					<label>Password:</label>
					<input type="text" min="8" required />
					<Link to="/userwallet" className="submit">
						Submit
					</Link>

					<div className="ForgotPassword">
						<h4>
							don't have an account <Link to="/signup">Sign up Now</Link>
						</h4>
						<button>Forgot Password</button>
					</div>
				</form>
			</center>
		</div>
	);
}

export default LoginPage;
