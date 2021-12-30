import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from 'services/api';

interface TypeTransactions {
	id: number;
	amount: number;
	title: string;
	category: string;
	date: string;
	type: string;
}

type TypeTransactionsInput = Omit<TypeTransactions, 'id' | 'date'>;

interface TransactionsProviderProps {
	children: ReactNode;
}

interface TypeTransactionsData {
	Transactions: TypeTransactions[];
	CreateTransactions: (Transactions: TypeTransactionsInput) => Promise<void>;
}

export const TransactionsContext = createContext<TypeTransactionsData>(
	{} as TypeTransactionsData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [Transactions, setTransactions] = useState<TypeTransactions[]>([]);
	var dateNow = new Date(new Date()).toLocaleDateString();
	useEffect(() => {
		api.get('transactions').then((reponse) =>
			setTransactions(reponse.data.transactions)
		);
	}, []);

	async function CreateTransactions(props: TypeTransactionsInput) {
		const response = await api.post('/transactions', {
			...props,
			date: dateNow,
		});
		const { transaction } = response.data;
		console.log(transaction);

		setTransactions([...Transactions, transaction]);
	}

	return (
		<TransactionsContext.Provider
			value={{ Transactions, CreateTransactions }}
		>
			{children}
		</TransactionsContext.Provider>
	);
}
