import { Link } from 'react-router-dom';

const Login = () => {
	const handleInputChange = (e) => {
		const { value } = e.target;
		const englishOnly = value.replace(/[^\x00-\x7F]/g, '');
		e.target.value = englishOnly;
	};

	return (
		<div className="page">
			<div className="form-card">
				<h1 className="page-title">Login</h1>
				<p className="subtitle">. Welcome back. This is a UI-only demo</p>

				<form className="form" onSubmit={(e) => e.preventDefault()}>
					<label className="label" htmlFor="login-email">Email</label>
					<input
						id="login-email"
						type="email"
						placeholder="you@example.com"
						className="input"
						onInput={handleInputChange}
						lang="en"
						dir="ltr"
					/>

					<label className="label" htmlFor="login-password">Password</label>
					<input
						id="login-password"
						type="password"
						placeholder="Enter your password"
						className="input"
						onInput={handleInputChange}
						lang="en"
						dir="ltr"
					/>

					<button type="submit" className="button">Login</button>
				</form>

				<p className="muted">
					No account yet? <Link to="/register" className="text-link">Create one</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;