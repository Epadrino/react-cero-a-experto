import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
	const { counter, increment, decrement, reset } = useCounter();

	return (
		<>
			<h1>Counter with Hook: {counter}</h1>

			<hr />

			<button className='btn btn-outline-primary ' onClick={increment}>
				+1
			</button>
			<button className='btn btn-outline-primary ' onClick={reset}>
				Reset
			</button>
			<button className='btn btn-outline-primary ' onClick={decrement}>
				-1
			</button>
		</>
	);
};
