import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	return (
		<div className="join-outer-container">
			<div className="join-inner-container">
				<h1 className="header">Join</h1>
				<div>
					<input
						type="text"
						placeholder="Name"
						className="join-input"
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Room"
						className="join-input mt-20"
						onChange={(event) => setRoom(event.target.value)}
					/>
				</div>
				<Link
					to={`/chat?name=${name}&room=${room}`}
					onClick={(event) => (!name || !room ? event.preventDefault() : null)}
				>
					<button type="submit" className="btn mt-20">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Join;
