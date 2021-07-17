/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import * as S from './styles';

import LogoImg from '../../assets/images/LandingPage/PiupiuwerLogo.svg';
import PenaImg from '../../assets/images/LandingPage/PenaLogo.svg';

import { useAuth } from '../../hooks/useAuth';

function Landing() {
    const { login } = useAuth();

    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');

    return (
        <S.Landing>
            <S.Left>
                <S.PenaDiv>
                    <S.PenaImg src={PenaImg} alt="logopiupiuwer" />
                </S.PenaDiv>
                <S.Logo>
                    <S.LogoImg src={LogoImg} alt="Piupiuwer" />
                    <S.ConnectH2>Connect with your best friends</S.ConnectH2>
                </S.Logo>
            </S.Left>
            <S.Right>
                <S.NewAccountButton>Create new account</S.NewAccountButton>
                <S.LogIn>
                    <S.FormInputs>
                        <S.Email>
                            <S.InputEmail
                                type="text"
                                placeholder="Email or username"
                                name="inputEmail"
                                onChange={(e) => setEmailInput(e.target.value)}
                            />
                        </S.Email>
                        <S.Password>
                            <S.InputPassword
                                type="text"
                                placeholder="Password"
                                name="inputPassword"
                                onChange={(e) =>
                                    setPasswordInput(e.target.value)
                                }
                            />
                        </S.Password>
                    </S.FormInputs>
                    <S.LogForgot>
                        <S.SubmitButton
                            type="submit"
                            onClick={() =>
                                login({
                                    email: emailInput,
                                    password: passwordInput
                                })
                            }
                        >
                            Log in
                        </S.SubmitButton>
                        <S.NoLink href="não tem link aqui não">
                            Forgot your password?
                        </S.NoLink>
                    </S.LogForgot>
                </S.LogIn>
            </S.Right>
        </S.Landing>
    );
}

export default Landing;
