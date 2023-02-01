import { Routes, Route } from 'react-router-dom';
import Layout from './routers/layout/layout.component';
import Home from './routers/home/home.component';
import NoMatch from './routers/no-match/no-match.component';
import './assets/tailwind.output.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
			{/* Using path="*"" means "match anything", so this route
			acts like a catch-all for URLs that we don't have explicit
			routes for. */}
			<Route path='*' element={<NoMatch />} />
		</Routes>
	);
}

export default App;
