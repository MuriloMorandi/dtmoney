import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App';
import { createServer, Model } from "miragejs"

createServer({
    models:{
		transaction: Model
	},

	seeds(server){
		server.db.loadData({
			transactions:[
				{
					id:1,
					title:'Manuteção de website',
					amount: 600,
					category:'Venda',
					date: '18/11/2021',
					type:'Income'
				},
				{
					id:2,
					title:'Notebook Samsung',
					amount:6000,
					category:'Compra',
					date: '18/11/2021',
					type:'Outcome'
				},
				{
					id:3,
					title:'IFood',
					amount:100,
					category:'Alimentação',
					date: '23/11/2021',
					type:'Outcome'
				},
				{
					id:4,
					title:'DtMoeny',
					amount:60,
					category:'Investimentos',
					date: '23/11/2021',
					type:'Outcome'
				}
			]
		})
	},

	routes(){
		this.namespace = 'api';

		this.get('/transactions', ()=>{
			return this.schema.all('transaction')
		})
      }
  })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);