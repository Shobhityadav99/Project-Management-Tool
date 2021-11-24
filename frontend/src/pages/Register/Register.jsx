import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Code Buddy</h3>
					<span className="loginDesc">
						Connect with new people to develop cool stuff with{" "}
						<span className="highlight"> Code Buddy</span> .
					</span>
				</div>
				<div className="loginRight">
					<div className="loginBox">
						<input placeholder="Username" className="loginInput" />
						<input placeholder="E-mail" className="loginInput" />
						<input
							placeholder="Password"
							type="password"
							className="loginInput"
						/>
						<input
							placeholder="Password Again"
							type="password"
							className="loginInput"
						/>
						<button className="loginBtn">Sign Up </button>
						<button className="registerBtn">
							<Link to="/" style={{ textDecoration: "none", color: "white" }}>
								Log In
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
