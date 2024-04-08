import logo from './logo.svg';
import './App.css';
import { startTransition } from 'react';

export const App = () => {
	const currentYear = new Date().getFullYear(); //{`пример Императивного подхода`}
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<footer>
				{/* пример декларативного подхода */}
				<p>&copy; {currentYear} </p>
			</footer>
		</div>
	);
};
