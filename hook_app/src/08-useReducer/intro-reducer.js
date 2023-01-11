// estado inicial de la aplicacion
const initialState = [
	{
		id: 1,
		todo: 'Recolectar la piedra del Alma',
		done: false,
	},
];

// hook para
const todoReducer = (state = initialState, action = {}) => {
	if (action.type === '[TODO] add todo') {
		return [...state, action.payload];
	}
	return state;
};

let todos = todoReducer();

// nuevo estado
const newTodo = {
	id: 2,
	todo: 'Recolectar la piedra de Poder',
	done: false,
};

// accion para agregar un nuevo todo
const addTodoAction = {
	type: '[TODO] add todo',
	payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
