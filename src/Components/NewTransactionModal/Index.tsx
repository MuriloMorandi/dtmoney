import React, { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { TransactionsContext } from 'Context/TransactionsContext';
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
	const { CreateTransactions } = useContext(TransactionsContext);

	const [type, setType] = useState('Income');
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [amount, setamount] = useState(0);

	function setDefaultValues() {
		setType('Income');
		setTitle('');
		setCategory('');
		setamount(0);
	}

	async function handleCreatNewTransaction(event: FormEvent) {
		event.preventDefault();

		await CreateTransactions({
			title,
			amount,
			type,
			category,
		});

		setDefaultValues();
		handleStateNewTransactionModal();
	}

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

				<Container onSubmit={handleCreatNewTransaction}>
					<h2>Cadatrar transação</h2>

					<input
						placeholder="Título"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>

					<input
						placeholder="Valor"
						type="number"
						min="0"
						value={amount}
						onChange={(event) =>
							setamount(Number(event.target.value))
						}
					/>

					<TransactionTypeContainer>
						<RadionButton
							type="button"
							onClick={() => setType('Income')}
							isActive={type === 'Income'}
							ativeColor="green"
						>
							<img src={IncomeSvg} alt="Entrada" />
							<span>Entrada</span>
						</RadionButton>
						<RadionButton
							type="button"
							onClick={() => setType('Outcome')}
							isActive={type === 'Outcome'}
							ativeColor="red"
						>
							<img src={OutcomeSvg} alt="Saída" />
							<span>Saída</span>
						</RadionButton>
					</TransactionTypeContainer>

					<input
						placeholder="Categoria"
						value={category}
						onChange={(event) => setCategory(event.target.value)}
					/>
					<button type="submit">Cadastrar</button>
				</Container>
			</Modal>
		</>
	);
}
