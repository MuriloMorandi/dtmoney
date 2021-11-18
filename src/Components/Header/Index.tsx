import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Logo } from './styles';


export function Header() {
    return(
        <Container>
            <Content>
                <Logo src={logoImg} alt="Dt Money"/> 
                <button type="button">
                    Nova trasação
                </button>
            </Content>
        </Container>
    )
}