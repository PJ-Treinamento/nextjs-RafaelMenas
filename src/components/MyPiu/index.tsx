/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { parseCookies } from 'nookies';
import api from '../../../service/api';

import * as S from './styles';

import { IUser } from '../../models';

type MyPiuProps = {
    user: IUser;
};

const Mypiu: React.FC<MyPiuProps> = ({ user }) => {
    const [textBoolean, setTextBoolean] = useState('');

    const [textPost, setTextPost] = useState('');

    const { '@Project:token': token } = parseCookies();

    const postPius = async () => {
        await api.post(
            '/pius',
            { text: textPost },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );
        window.location.reload();
    };

    const correction = () => {
        if (textPost.length > 140) {
            setTextBoolean(
                'Your ideas can be a little confusing, try to make them simpler (pius are 140 characters max)'
            );
        }
        if (textPost.length === 0) {
            setTextBoolean(
                'Write a little more about your ideas (pius are 1 character minimum)'
            );
        }
        if (textPost.length < 140 && textPost.length > 0) {
            setTextBoolean('');
        }
    };

    return (
        <S.MyPiuWrapper>
            <S.PrincipalWrapper>
                <img src={user.photo} alt="imagem de perfil" />{' '}
                <S.Question>What are you thinking?</S.Question>
                <S.Arroba>{user.username}</S.Arroba>
            </S.PrincipalWrapper>
            <S.TextPiuWrapper>
                <textarea
                    name="think"
                    id="thinking"
                    placeholder="How are you?"
                    onChange={(e) => setTextPost(e.target.value)}
                ></textarea>
                <p style={{ color: textPost.length > 140 ? 'red' : 'black' }}>
                    {textPost.length}
                </p>
                <button
                    onClick={() => {
                        correction();
                        postPius();
                    }}
                >
                    piu
                </button>
                <p style={{ color: 'red' }}>{textBoolean}</p>
            </S.TextPiuWrapper>
        </S.MyPiuWrapper>
    );
};

export default Mypiu;
