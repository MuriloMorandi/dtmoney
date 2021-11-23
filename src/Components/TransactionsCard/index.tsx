import React from 'react';
import { Container, TableData } from './styles';

interface TypeProps{
    amount: number;
    title: string;
    category: 'Compra' | 'Venda' | 'Investimentos' ;
    date: string;
    type?: 'Income' | 'Outcome' ;
}

export function TransactionsCard(props:TypeProps) {
  return(
      <Container>
        <TableData>{props.title}</TableData>
        <TableData type={props.type}>{props.type === 'Outcome' && '-'}R${props.amount}</TableData>
        <TableData>{props.category}</TableData>
        <TableData>{props.date}</TableData>
      </Container>
  );
}
