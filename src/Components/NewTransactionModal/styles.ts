import styled from 'styled-components';
import { transparentize } from 'polished';

interface PropRadionButton {
	isActive: boolean;
	ativeColor: 'red' | 'green';
}

const colors = {
	red: '#e52e4d',
	green: '#33cc95',
};

export const Container = styled.form`
	h2 {
		color: var(--text-title);
		font: 1.5rem;
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;

		border-radius: 0.25rem;
		border: 1px solid #d7d7d7;
		background: #e7e9ee;

		font-weight: 400;
		font-size: 1rem;

		&::placeholder {
			color: var(--text-body);
		}

		& + input {
			margin-top: 1rem;
		}
	}

	button[type='submit'] {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		background: var(--green);
		color: #fff;
		border-radius: 0.25rem;
		border: 0;
		font-size: 1rem;
		font-weight: 600;
		margin-top: 1.25rem;
	}
`;

export const TransactionTypeContainer = styled.div`
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
`;

export const RadionButton = styled.button<PropRadionButton>`
	height: 4rem;
	border: 2px solid #d7d7d7;
	border-radius: 0.25rem;

	background: ${(props) =>
		props.isActive
			? transparentize(0.85, colors[props.ativeColor])
			: 'tranparante'};

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 20px;
		height: 20px;
	}

	span {
		display: inline-block;
		margin-left: 1rem;
		font-size: 1rem;
		color: var(--text-title);
	}
`;
