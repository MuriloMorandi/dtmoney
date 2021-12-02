import React, { useState } from 'react';
import Modal from 'react-modal';

import CloseModalSvg from '../../assets/close.svg';
import IncomeSvg from '../../assets/income.svg';
import OutcomeSvg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadionButton } from './styles';

interface TypeProps {
	isNewTransactionsModal: boolean;
	handleStateNewTransactionModal: () => void;
}

export function NewTransactionModal({
	isNewTransactionsModal,
	handleStateNewTransactionModal,
}: TypeProps) {
	const [type, setType] = useState('income');
	return (
		<>
			<Modal
				isOpen={isNewTransactionsModal}
				onRequestClose={handleStateNewTransactionModal}
				overlayClassName="react-modal-overlay"
				className="react-modal-content"
			>
				<button
					onClick={handleStateNewTransactionModal}
					className="react-modal-close"
				>
					<img src={CloseModalSvg} alt="Fechar modal" />
				</button>

				<Container>
					<h2>Cadatrar transação</h2>
					<input placeholder="Título" />
					<input placeholder="Valor" type="number" />

					<TransactionTypeContainer>
						<RadionButton
							type="button"
							onClick={() => setType('income')}
							isActive={type === 'income'}
							ativeColor="green"
						>
							<img src={IncomeSvg} alt="Entrada" />
							<span>Entrada</span>
						</RadionButton>
						<RadionButton
							type="button"
							onClick={() => setType('outcome')}
							isActive={type === 'outcome'}
							ativeColor="red"
						>
							<img src={OutcomeSvg} alt="Saída" />
							<span>Saída</span>
						</RadionButton>
					</TransactionTypeContainer>

					<input placeholder="Categoria" />
					<button type="submit">Cadastrar</button>
				</Container>
			</Modal>
		</>
	);
}
