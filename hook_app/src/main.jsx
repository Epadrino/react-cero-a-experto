import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';

//import { SimpleForm } from './02-useEffect/SimpleForm';
// import { TodoApp } from './08-useReducer/TodoApp';
// import { MainApp } from './09-useContext/MainApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';
// import './08-useReducer/intro-reducer';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<React.StrictMode>
			<FormWithCustomHook />
		</React.StrictMode>
	</BrowserRouter>
);
