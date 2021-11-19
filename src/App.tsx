import { Dashboard } from 'Components/Dashboard/Index';
import { Header } from 'Components/Header/Index';
import React from 'react';
import { GlobalStyle } from 'style/Global';

export function App() {
	return (
		<>
			<Header/>
			<Dashboard/>
			<GlobalStyle/>
    	</>
  	);
}
