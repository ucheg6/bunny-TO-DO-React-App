import React, { useState } from 'react';

import { createUser } from '../services/action';

const SignupComponent = () => {
	const [userName, setUserName] = useState('');

	const onSubmit = event => {
		event.preventDefault();
		createUser(userName);
	};

	return (
		<div className="container">
			<div className="col-md-4"></div>
			<div className="col-md-8">
				<h3 className="text-center m-3">Please submit your name first.</h3>
			</div>
			<form>
				<div className="form-group mt-900">
					<label htmlFor="exampleInputEmail1">Full Name</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={userName}
						onChange={e => setUserName(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={e => onSubmit(e)}
				>
					Submit
				</button>
			</form>
		</div>
	);
};
export default SignupComponent;
