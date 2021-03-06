import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
    font-size: 60%;

    --red-default:#FF6B6B;
    --red-dim: #FF5454;
    --red-verydim: #FF3333;
    --grey-default: #C4C4C4;
    --grey-dim: #9E9A9A;
    --grey-verydim: #5E5D5D;
    --black: #000000; 
    --white: #FFFFFF;
}

html, body, #root {
    height: 100vh;
}

body {
    background: var(--white);
}

#root{
    display: flex;
    align-items : center;
    justify-content: center;
}

body, 
input, 
button,
textarea {
    font: 500 1.6rem Noto Sans HK;
}

.container {
    width: 90vw;
    max-width: 700px;
}

@media (min-width: 700px) {
    :root {
        font-size: 62.5%;
    }
}
`;
