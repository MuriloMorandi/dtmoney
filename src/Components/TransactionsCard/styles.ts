import styled, { css } from 'styled-components';

interface TypeProps {
	type?: String;
}

export const Container = styled.tr``;

export const TableData = styled.td<TypeProps>`
	padding: 1rem 2rem;
	background: var(--shape);
	color: var(--text-body);
	border: 0;
	border-radius: 0.25rem;

	&:first-child {
		color: var(--text-title);
	}

	&:nth-child(2) {
		color: var(--green);

		${({ type }) =>
			type === 'Outcome' &&
			css`
				color: var(--red);
			`};
	}
`;
