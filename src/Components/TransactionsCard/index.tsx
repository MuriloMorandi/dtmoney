import React from 'react';
import { Container, TableData } from './styles';

interface TypeProps {
	id?: number;
	amount: number;
	title: string;
	category: string;
	date: string;
	type?: string;
}

export function TransactionsCard(props: TypeProps) {
	return (
		<Container key={props.id}>
			<TableData>{props.title}</TableData>
			<TableData type={props.type}>
				{props.type === 'Outcome' && '-'}
				{new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				}).format(props.amount)}
			</TableData>
			<TableData>{props.category}</TableData>
			<TableData>{props.date}</TableData>
		</Container>
	);
}
