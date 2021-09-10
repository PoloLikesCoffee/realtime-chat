import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
	let isSentByCurrentUser = false;
	const trimmedName = name.trim().toLowerCase();

	if (user === trimmedName) {
		isSentByCurrentUser = true;
	}

	return isSentByCurrentUser ? (
		<div className="message-container justifyEnd">
			<p className="send-text pr-10">{trimmedName}</p>
			<div className="message-box background-green">
				<p className="message-text color-white">{ReactEmoji.emojify(text)}</p>
			</div>
		</div>
	) : (
		<div className="message-container justifyStart">
			<div className="message-box background-light-gray">
				<p className="message-text color-dark">{ReactEmoji.emojify(text)}</p>
			</div>
			<p className="send-text pl-10">{user}</p>
		</div>
	);
};

export default Message;
