import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Logo } from './styles';

interface TypeProps {
	fnHandleStateNewTransactionModal: () => void;
}

export function Header({ fnHandleStateNewTransactionModal }: TypeProps) {
	return (
		<Container>
			<Content>
				<Logo src={logoImg} alt="Dt Money" />
				<button
					type="button"
					onClick={fnHandleStateNewTransactionModal}
				>
					Nova trasação
				</button>
			</Content>
		</Container>
	);
}
