import styled from 'styled-components';
import Image from 'next/image';

export const Landing = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: grey;
`;

export const Left = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PenaImg = styled(Image)`
    height: 5rem;
`;

export const Logo = styled.div`
    margin-bottom: 5rem;
`;

export const LogoImg = styled(Image)`
    height: 14rem;
`;

export const ConnectH2 = styled.h2`
    padding-top: 0.5rem;
    color: var(--grey-dim);
    font-size: 1.8rem;
`;

export const Right = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: var(--red-default);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PenaDiv = styled.div`
    position: absolute;
    top: 40px;
    left: 20px;
`;

export const NewAccountButton = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    border: none;
    width: 10vw;
    height: 6vh;
    background-color: #e42626;
    border-radius: 1.5rem;
    font-size: 1.8rem;
    padding-bottom: 0.5rem;
    color: white;
`;

export const LogIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 35vh;
    width: 32vw;
    border: 0.1rem solid var(--grey-dim);
    border-radius: 2rem;
`;

export const Email = styled.div`
    display: flex;
    justify-content: center;
    width: 25vw;
    height: 10rem;
    border: 0.2rem solid var(--grey-dim);
    border-radius: 1rem;
    margin-bottom: 2rem;
`;

export const InputEmail = styled.input`
    width: 24vw;
    margin-left: 1rem;
    border: none;
    font-family: Noto Sans HK;
    resize: none;
    outline: none;
`;

export const Password = styled.div`
    display: flex;
    justify-content: center;
    width: 25vw;
    height: 8rem;
    border: 0.2rem solid var(--grey-dim);
    border-radius: 1rem;
    margin-bottom: 1rem;
    height: 10rem;
`;

export const InputPassword = styled.input`
    width: 24vw;
    margin-left: 1rem;
    font-family: Noto Sans HK;
    border: none;
    resize: none;
    outline: none;
`;

export const FormInputs = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 15vh;
`;

export const LogForgot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SubmitButton = styled.button`
    border: 0.02rem solid;
    width: 10vw;
    height: 6vh;
    background-color: var(--red-default);
    border-radius: 1.5rem;
    font-size: 3rem;
    padding-bottom: 0.5rem;
    color: white;
    margin-bottom: 0.5rem;
    margin-top: 4rem;
`;

export const NoLink = styled.a`
    margin-left: 3.5rem;
    font-size: 12px;
`;

// #page-landing {
//     width: 100vw;
//     height: 100vh;

//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: grey;
// }

/*
RIGHT
RIGHT
RIGHT
*/

// #right {
// height: 100vh;
// width: 50vw;
// background-color: var(--red-default);
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// }

// #log-in {
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// background-color: white;
// height: 35vh;
// width: 32vw;
// border: 0.1rem solid var(--grey-dim);
// border-radius: 2rem;
// }

// #Inputs {
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// background-color: white;
// height: 15vh;

// }

// #Email {
// display: flex;
// justify-content: center;
// width: 25vw;
// height: 10rem;
// border: 0.2rem solid var(--grey-dim);
// border-radius: 1rem;
// margin-bottom: 2rem;
// }

// .email {
// width: 24vw;
// margin-left:1rem;
// border:none;
// font-family: Noto Sans HK;
// resize: none;
// outline: none;
// }

// #Password {
// display: flex;
// justify-content: center;
// width: 25vw;
// height: 8rem;
// border: 0.2rem solid var(--grey-dim);
// border-radius: 1rem;
// margin-bottom: 1rem;
// height: 10rem;
// }

// #Password input {
// width: 24vw;
// margin-left:1rem;
// font-family: Noto Sans HK;
// border: none;
// resize: none;
// outline: none;

// }

// .newAccount {
// position: absolute;
// right:1rem;
// top:1rem;
// border: none;
// width: 10vw;
// height: 6vh;
// background-color: #E42626;
// border-radius: 1.5rem;
// font-size: 1.8rem;
// padding-bottom: 0.5rem;
// color: white;

// }

// #Log-Forgot {
// display: flex;
// flex-direction: column;
// justify-content: center;
// }

// .LogIn {
//     border: 0.02rem solid;
//     width: 10vw;
//     height: 6vh;
//     background-color: var(--red-default);
//     border-radius: 1.5rem;
//     font-size: 3rem;
//     padding-bottom: 0.5rem;
//     color: white;
//     margin-bottom: 0.5rem;
//     margin-top: 4rem;
// }

// .LogIn:hover {
//     background-color: var(--red-dim);
// }

// .LogIn button {
//     font-family: Noto Sans HK;
// }

// #Log-Forgot a {
// margin-left: 3.5rem;
// font-size: 12px;
// }

/*
LEFT
LEFT
LEFT
*/

// #left {
//     height: 100vh;
//     width: 50vw;
//     background-color: white;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .pena img {
//     height: 5rem;
//     position: absolute;
//     left: 2rem;
//     top: 2rem;
// }

// .logo {
//     margin-bottom: 5rem;
// }

// .logo img {
//     height: 14rem;
// }

// .logo h2 {
// padding-top: 0.5rem;
// color: var(--grey-dim);
// font-size: 1.8rem;
// }
//
