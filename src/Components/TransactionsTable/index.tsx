import { useContext } from 'react';
import { TransactionsCard } from 'Components/TransactionsCard';
import { Container, Table } from './styles';
import { TransactionsContext } from 'Context/TransactionsContext';

export function TransactionsTable() {
	const { Transactions } = useContext(TransactionsContext);

	return (
		<Container>
			<Table>
				<thead>
					<th>Titulo</th>
					<th>valor</th>
					<th>Categoria</th>
					<th>Data</th>
				</thead>
				<tbody>
					{Transactions.map((transactions) => {
						return (
							<TransactionsCard
								key={transactions.id}
								title={transactions.title}
								amount={transactions.amount}
								category={transactions.category}
								date={transactions.date}
								type={transactions.type}
							/>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
}
