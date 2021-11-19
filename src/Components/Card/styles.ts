import styled, { css } from 'styled-components';

interface TypeProps{
    type: 'Income' | 'Outcome' | 'Total';
}

export const Container = styled.div<TypeProps>`
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    background: var(--shape);

    ${
        ({type})=> type === 'Total' && css` background: var(--green) `
    };

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
`;
