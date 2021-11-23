import { Summary } from 'Components/Summary';
import { TransactionsTable } from 'Components/TransactionsTable';
import { Container } from './styles';

export function Dashboard() {
    return(
        <>
            <Container>
                <Summary/>
                <TransactionsTable/>
            </Container>
        </>
    );    
}
