import React from 'react';
import Image from 'next/image';
import * as S from './styles';

import LogoImg from '../../assets/images/LandingPage/PiupiuwerLogo.svg';
import LupaImg from '../../assets/images/Feed/lupeIcon.svg';
import TopicosImg from '../../assets/images/Feed/momentsIcon.svg';
import TrendingImg from '../../assets/images/Feed/trendingIcon.svg';
import { IUser } from '../../models';

export interface Search {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    user: IUser;
}

const PageHeader: React.FC<Search> = ({ setSearch, user }) => {
    return (
        <S.HeadWrapper>
            <S.LogoDiv>
                <S.Logo
                    src={LogoImg}
                    alt="Logo Piupiuwer"
                    className="logopiu"
                    width={200}
                    height={200}
                />
            </S.LogoDiv>
            <S.SearchWrapper>
                <S.InputSearch
                    placeholder="Search your piu..."
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <S.LupaDiv>
                    <S.LupaIcon src={LupaImg} alt="Logo Piupiuwer" />
                </S.LupaDiv>
            </S.SearchWrapper>
            <S.TrendingTopicsWrapper>
                <Image
                    src={TopicosImg}
                    alt="Logo Piupiuwer"
                    className="topicos"
                />
                <Image
                    src={TrendingImg}
                    alt="Logo Piupiuwer"
                    className="trendings"
                />
            </S.TrendingTopicsWrapper>
            <S.PerfilDiv>
                <S.Perfil
                    src={user.photo}
                    width={70}
                    height={70}
                    alt="Logo Piupiuwer"
                    className="perfil"
                />
            </S.PerfilDiv>
        </S.HeadWrapper>
    );
};

export default PageHeader;
