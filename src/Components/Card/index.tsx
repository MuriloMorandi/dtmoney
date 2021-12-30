import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from './styles';

interface TypeProps {
	type: 'Income' | 'Outcome' | 'Total';
	amount: number;
}

const titleOptions = {
	Income: 'Entradas',
	Outcome: 'Saídas',
	Total: 'Total',
};

const imgOptions = {
	Income: incomeImg,
	Outcome: outcomeImg,
	Total: totalImg,
};

export function Card(props: TypeProps) {
	return (
		<Container type={props.type}>
			<header>
				<p>{titleOptions[props.type]}</p>
				<img src={imgOptions[props.type]} alt="Entradas" />
			</header>
			<strong>
				{props.type === 'Outcome' && '- '}
				{new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				}).format(props.amount)}
			</strong>
		</Container>
	);
}
