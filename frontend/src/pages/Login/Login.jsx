import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
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
						<input placeholder="E-mail" className="loginInput" />
						<input
							placeholder="Password"
							type="password"
							className="loginInput"
						/>
						<button className="loginBtn">Login</button>
						<a href="/" className="forgot">
							<span>Forgot Password?</span>
						</a>
						<button className="registerBtn">
							<Link
								to="/register"
								style={{ textDecoration: "none", color: "white" }}
							>
								Create a new account
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
