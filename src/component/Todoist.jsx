import React, { useState } from 'react';
import './Todoist.css';

const Todoist = () => {
	const [input, setInput] = useState('');

	const handleSubmit = () => {
		console.log(input);
	};

	return (
		<div className='todoist-container'>
			<div>
				<input
					type='text'
					placeholder='Enter todo title'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button className='add-btn' onClick={handleSubmit}>
					Add Todo
				</button>
			</div>
			<ul className='todo-lists'>
				<li className='todo-list-item'>
					Buy Bread
					{/* View buttton */}
					<button className='action-btn'>👁</button>
					{/* Toggle complete button */}
					<button>✅</button>
					{/* Edit button */}
					<button className='action-btn'>✍️</button>
					{/* Delete button */}
					<button className='action-btn'>🗑</button>
				</li>
			</ul>
		</div>
	);
};

export default Todoist;
