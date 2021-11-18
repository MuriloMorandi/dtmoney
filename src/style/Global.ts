import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --red: #e52e4d;
        --gren: #
        --blue: #5429cc;
        

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        font-size:16px;

        @media (max-width: 1080px) {
            font-size:93.75% //15px
        }
        
        @media (max-width: 720px) {
            font: 87.5%; //14px
        }
    }

    body {
        background: val(--background);
        --webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }

    body, input, textarea, button{
        font-family: 'Popins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
        
    }
`;
