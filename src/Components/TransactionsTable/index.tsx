import { useEffect, useState } from "react";
import { TransactionsCard } from "Components/TransactionsCard";
import { Container, Table } from "./styles";
import { api } from "services/api";

interface TypeTransactions{
    id:number;
    amount: number;
    title: string;
    category: string ;
    date: string;
    type: 'Income' | 'Outcome' ;
}


export function TransactionsTable() {
    const [transactions, setTransactions] = useState<TypeTransactions[]>([]);

    useEffect(()=>{
        api.get('transactions').then(reponse => setTransactions(reponse.data.transactions));
    }, [])

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
                    {
                        transactions.map( transactions =>{
                            return(

                                <TransactionsCard
                                    key={transactions.id}
                                    title={transactions.title}
                                    amount={transactions.amount}
                                    category={transactions.category}
                                    date={transactions.date}
                                    type={transactions.type}
                                />                        
                            )}
                        )
                        
                    }
                </tbody>
            </Table>
        </Container>
    )
}
