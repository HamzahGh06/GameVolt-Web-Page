import { Link } from 'react-router-dom';

const Register = () => {
	const handleInputChange = (e) => {
		const { value } = e.target;
		const englishOnly = value.replace(/[^\x00-\x7F]/g, '');
		e.target.value = englishOnly;
	};

	return (
		<div className="page">
			<div className="form-card">
				<h1 className="page-title">Create Account</h1>
				<p className="subtitle">. Fill the form to try the demo flow</p>

				<form className="form" onSubmit={(e) => e.preventDefault()}>
					<label className="label" htmlFor="register-name">Full Name</label>
					<input
						id="register-name"
						type="text"
						placeholder="Your name"
						className="input"
						onInput={handleInputChange}
						lang="en"
						dir="ltr"
					/>

					<label className="label" htmlFor="register-email">Email</label>
					<input
						id="register-email"
						type="email"
						placeholder="you@example.com"
						className="input"
						onInput={handleInputChange}
						lang="en"
						dir="ltr"
					/>

					<label className="label" htmlFor="register-password">Password</label>
					<input
						id="register-password"
						type="password"
						placeholder="Create a password"
						className="input"
						onInput={handleInputChange}
						lang="en"
						dir="ltr"
					/>

					<label className="label" htmlFor="register-confirm">Confirm Password</label>
					<input
						id="register-confirm"
						type="password"
						placeholder="Repeat your password"
						className="input"
						onInput={handleInputChange}
						lang="en"
						dir="ltr"
					/>

					<button type="submit" className="button">Create Account</button>
				</form>

				<p className="muted">
					Already have an account? <Link to="/login" className="text-link">Login</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;