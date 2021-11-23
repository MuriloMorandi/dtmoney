import styled, { css } from 'styled-components';

interface TypeProps{
    type?: 'Income' | 'Outcome' ;
}

export const Container = styled.div`
    margin-top: 2rem;
    overflow-y: scroll;
    height: 15rem;

    ::-webkit-scrollbar{
    width: 12px;
    height: 12px;
    }
    ::-webkit-scrollbar-thumb{
    background: var(--blue); 
    border: 4px none var(--background);
    border-radius: 30px;
    }
    
    ::-webkit-scrollbar-track{
    background: var(--background);
    border-radius: 0px;
    }

`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 0 0.5rem;
    
    
    
    th{
        padding: 1rem 2rem;
        color: var(--text-body);
        font-weight: 400;
        text-align: left;
        line-height: 1.5rem;
    }

`;

export const TableData = styled.td<TypeProps>`
    padding: 1rem 2rem;
    background: var(--shape);
    color: var(--text-body);
    border: 0;
    border-radius: 0.25rem;

    &:first-child{
        color: var(--text-title);
    }

    &:nth-child(2){
        color: var(--green);

        ${
            ({type})=> type === 'Outcome' && css` color: var(--red) `
        };
    }

`;



