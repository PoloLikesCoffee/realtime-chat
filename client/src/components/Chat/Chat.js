import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { socket } from '../../helpers/socket';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

const Chat = ({ location }) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		setName(name);
		setRoom(room);

		socket.emit('join', { name, room }, () => {});

		return () => {
			socket.emit('disconnect');

			socket.off();
		};
	}, [location.search]);

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages([...messages, message]);
		});
	}, [messages]);

	const sendMessage = (event) => {
		event.preventDefault();

		if (message) {
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	};

	return (
		<div className="outer-container">
			<div className="container">
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</div>
		</div>
	);
};

export default Chat;
