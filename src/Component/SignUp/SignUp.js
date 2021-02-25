import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { TrophyOutlined } from "@ant-design/icons";

function SignUp() {
	const [choose, setChoose] = useState(TrophyOutlined);
	return (
		<div className="SignUp">
			<center className="welcome">
				<h1>Welcome to BetaPay</h1>
			</center>
			{choose ? (
				<center
					onClick={() => {
						setChoose(!choose);
					}}>
					<div className="toggle">
						<h3>Customer</h3>
						<h4>Bussiness</h4>
					</div>
				</center>
			) : (
				<center
					onClick={() => {
						setChoose(!choose);
					}}>
					<div className="toggle">
						<h4>Customer</h4>
						<h3>Bussiness</h3>
					</div>
				</center>
			)}

			<center className="SignUpPlatform">
				{choose ? (
					<form className="Form" type="submit">
						<label>First Name:</label>
						<input type="text" required />
						<label>Last Name:</label>
						<input type="text" required />
						<label>Middle Name:</label>
						<input type="text" />
						<label>Email:</label>
						<input placeholder="email@email.com" type="text" />
						<label>Phone Number:</label>
						<input type="number" placeholder="080xxxxxxxxx" required />
						<label>Acount Number:</label>
						<input type="number" placeholder="xxxxxxxxxxxx" required />
						<label>Bank:</label>
						<select required>
							<option>FirstBank</option>
							<option>Zenith</option>
							<option>GTB</option>
							<option>UBA</option>
							<option>Ecobank</option>
							<option>Union Bank</option>
							<option>Key Stone</option>
							<option>FCMB</option>
						</select>
						{/* <input type="type" required /> */}
						<label>BVN:</label>
						<input type="number" placeholder="xxxxxxxxxxxx" required />
						<label>Date of Birth:</label>
						<input type="date" />
						<label>Home Address:</label>
						<input type="text" required />
						<input type="file" required />
						<label>Password:</label>
						<input
							type="text"
							required
							min="8"
							placeholder="*********"
							type="password"
						/>
						<label>Confirm Password:</label>
						<input
							type="text"
							required
							min="8"
							placeholder="*********"
							type="password"
						/>
						<input type="submit" placeholder="submit" />
						<h3>
							Already have an Account <Link to="/login">Login</Link>
						</h3>
					</form>
				) : (
					<form className="Form" type="submit">
						<label>Business Name:</label>
						<input type="text" required />
						<label>Email:</label>
						<input placeholder="email@email.com" type="text" />
						<label>Phone Number:</label>
						<input type="number" placeholder="080xxxxxxxxx" required />
						<label>Acount Number:</label>
						<input type="number" placeholder="xxxxxxxxxxxx" required />
						<label>Bank:</label>
						<select required>
							<label>BVN:</label>
							<input type="number" placeholder="xxxxxxxxxxxx" required />
							<option>FirstBank</option>
							<option>Zenith</option>
							<option>GTB</option>
							<option>UBA</option>
							<option>Ecobank</option>
							<option>Union Bank</option>
							<option>Key Stone</option>
							<option>FCMB</option>
						</select>
						<label>Type of Industry:</label>
						<select required>
							<option>Tech</option>
							<option>Real Estate</option>
							<option>Education</option>
							<option>Agriculture</option>
							<option>Trade</option>
							<option>Servies</option>
							<option>Art</option>
							<option>Financial</option>
							<option>Professional</option>
						</select>

						{/* <input type="type" required /> */}

						<label>Year of establishment:</label>
						<input type="date"/>
						<label>Businesss Address:</label>
						<input type="text" required />
						<input type="file" required />
						<label>Password:</label>
						<input
							type="text"
							required
							min="8"
							placeholder="*********"
							type="password"
						/>
						<label>Confirm Password:</label>
						<input
							type="text"
							required
							min="8"
							placeholder="*********"
							type="password"
						/>
						<input type="submit" placeholder="submit" />
						<h3>
							Already have an Account <Link to="/login">Login</Link>
						</h3>
					</form>
				)}
			</center>
			<center>Developed by Tex</center>
		</div>
	);
}

export default SignUp;
