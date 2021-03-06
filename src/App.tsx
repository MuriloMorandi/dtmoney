import React, { useState } from 'react';
import { GlobalStyle } from 'style/Global';
import Modal from 'react-modal';

import { Dashboard } from 'Components/Dashboard/Index';
import { Header } from 'Components/Header/Index';
import { NewTransactionModal } from 'Components/NewTransactionModal/Index';
import { TransactionsProvider } from 'hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
	const [isNewTransactionsModal, setNewTransactionModal] = useState(false);

	function handleStateNewTransactionModal() {
		setNewTransactionModal(!isNewTransactionsModal);
	}

	return (
		<>
			<TransactionsProvider>
				<GlobalStyle />
				<Header
					fnHandleStateNewTransactionModal={
						handleStateNewTransactionModal
					}
				/>
				<Dashboard />
				<NewTransactionModal
					isNewTransactionsModal={isNewTransactionsModal}
					handleStateNewTransactionModal={
						handleStateNewTransactionModal
					}
				/>
			</TransactionsProvider>
		</>
	);
}
