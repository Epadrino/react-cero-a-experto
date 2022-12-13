import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
	const { counter } = useCounter();

	return (
		<>
			<h1>Counter with Hook: {counter}</h1>

			<hr />

			<button className='btn tbn-primary'>+1</button>
			<button className='btn tbn-primary'>Reset</button>
			<button className='btn tbn-primary'>-1</button>
		</>
	);
};
