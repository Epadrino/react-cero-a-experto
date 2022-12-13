import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
	const [counter, setCounter] = useState(initialValue);

	const increment = () => {
		setCounter(counter + 1);
	};
	const decrement = () => {
		if (counter === 0) return;
		setCounter(counter - 1);
	};
	const increment2 = (value = 1) => {
		setCounter(counter + value);
	};
	const decrement2 = (value = 1) => {
		if (counter === 0) return;
		setCounter(counter - value);
	};
	const reset = () => {
		setCounter(initialValue);
	};
	return {
		counter,
		increment,
		increment2,
		decrement,
		decrement2,
		reset,
	};
};
