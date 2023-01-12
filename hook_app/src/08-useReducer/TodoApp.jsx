import { useEffect, useReducer } from 'react';

import { TodoAdd, TodoList, todoReducer } from './';

//estado inicial de hook de todos
const initialState = [
	// {
	// 	id: new Date().getTime(),
	// 	description: 'Recolectar la piedra del alma',
	// 	done: false,
	// },
	// {
	// 	id: new Date().getTime() * 3,
	// 	description: 'Recolectar la piedra del tiempo',
	// 	done: false,
	// },
];

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
	//hook para cambiar el estado de los todos
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	// hook para guardar la informacion (todo) en el local storage
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));

		return () => {};
	}, [todos]);

	// funsion para agregar los nuevos todo
	const handleNewTodo = (todo) => {
		const action = {
			type: '[TODO] Add todo',
			payload: todo,
		};
		dispatch(action);
	};
	// funsion para eliminar un todo
	const handleDeleteTodo = (id) => {
		dispatch({
			type: '[TODO] Delete todo',
			payload: id,
		});
	};

	return (
		<>
			<h1>
				TodoApp; 10, <small>pendientes: 2</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
				</div>
				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
