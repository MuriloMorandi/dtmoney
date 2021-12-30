import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App';
import { createServer, Model } from 'miragejs';

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					title: 'Manuteção de website',
					amount: 600,
					category: 'Venda',
					date: new Date('11/18/2021').toLocaleDateString(),
					type: 'Income',
				},
				{
					title: 'Notebook Samsung',
					amount: 6000,
					category: 'Compra',
					date: new Date('11/18/2021').toLocaleDateString(),
					type: 'Outcome',
				},
				{
					title: 'IFood',
					amount: 100,
					category: 'Alimentação',
					date: new Date('11/23/2021').toLocaleDateString(),
					type: 'Outcome',
				},
				{
					title: 'DtMoeny',
					amount: 60,
					category: 'Investimentos',
					date: new Date('11/23/2021').toLocaleDateString(),
					type: 'Outcome',
				},
			],
		});
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);
			console.log(data);

			return schema.create('transaction', data);
		});
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
