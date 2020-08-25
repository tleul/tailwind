import React from 'react';

import Navbar from './component/Navbar';
import Card from './component/Card';
import CardList from './component/CardList';
import Subnavbar from './component/Subnavbar';
const App = () => {
	return (
		<>
			<Navbar />
			<Subnavbar />
			<CardList />
		</>
	);
};

export default App;
