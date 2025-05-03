import {Routes, Route} from 'react-router-dom';

import {ValorProvider} from './context/context';

import Home from './pages/home';
import Certificado from './pages/certificado';

import './App.css';

function App() {
	return (
		<>
			<ValorProvider>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/certificado"
						element={<Certificado />}
					/>
				</Routes>
			</ValorProvider>
		</>
	);
}

export default App;
