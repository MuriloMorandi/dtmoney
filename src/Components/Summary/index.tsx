import { Card } from 'Components/Card';
import { useTransactions } from 'hooks/useTransactions';
import { Container } from './styles';

export function Summary() {
	const { Transactions } = useTransactions();

	const summary = Transactions.reduce(
		(acc, transactions) => {
			if (transactions.type === 'Income') {
				acc.Income += transactions.amount;
				acc.Total += transactions.amount;
			} else if (transactions.type === 'Outcome') {
				acc.Outcome += transactions.amount;
				acc.Total -= transactions.amount;
			}
			console.log(transactions);
			return acc;
		},
		{
			Income: 0,
			Outcome: 0,
			Total: 0,
		}
	);

	return (
		<Container>
			<Card type="Income" amount={summary.Income} />
			<Card type="Outcome" amount={summary.Outcome} />
			<Card type="Total" amount={summary.Total} />
		</Container>
	);
}
