import { useEffect } from "react";
import { TransactionsCard } from "Components/TransactionsCard";
import { Container, Table } from "./styles";

export function TransactionsTable() {
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

                    <TransactionsCard
                        title='Desenvolvimento de website'
                        amount={3000}
                        category='Venda'
                        date='18/11/2021'
                        type='Income'
                    />

                    <TransactionsCard
                        title='Manuteção de website'
                        amount={6000}
                        category='Venda'
                        date='18/11/2021'
                        type='Income'
                    />

                    <TransactionsCard
                        title='Notebook Samsung'
                        amount={5000}
                        category='Compra'
                        date='18/11/2021'
                        type='Outcome'
                    />

                    <TransactionsCard
                        title='DTmoney'
                        amount={60}
                        category='Investimentos'
                        date='22/11/2021'
                        type='Outcome'
                    />

                </tbody>
            </Table>
        </Container>
    )
}
