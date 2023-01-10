import { useReducer } from "react";

const initialState=[
    {
        
    }
]
export const TodoApp = () => {

    const [state, dispatch] = useReducer(first, initialState)
	return (
		<>
			<h1>TodoApp</h1>
			<hr />
			<ul>
				<li>Item1</li>
				<li>Item2</li>
				<li>Item3</li>
			</ul>
		</>
	);
};
