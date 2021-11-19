import { Card } from "Components/Card";
import { Container } from "./styles";

export function Summary() {
    return(
        <Container>
            <Card type='Income' value={1000.00}/>
            <Card type='Outcome' value={500.50}/>
            <Card type='Total' value={500.50}/>
        </Container>
    )    
}