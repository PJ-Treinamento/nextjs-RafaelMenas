import styled from 'styled-components';
import Image from 'next/image';

export const HeadWrapper = styled.head`
    width: 100vw;
    height: 12vh;
    background-color: #efefef;
    display: flex;
    flex: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 10;
`;
export const Logo = styled(Image)`
    margin-left: 2rem;
`;

export const LogoDiv = styled.div`
    margin-left: 2rem;
`;

export const Perfil = styled(Image)`
    margin-right: 3rem;
    width: 9rem;
    border-radius: 5rem;
`;

export const PerfilDiv = styled.div`
    margin-right: 3rem;
    width: 9rem;
    border-radius: 5rem;
`;

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50rem;
    height: 5rem;
    background-color: white;
    border-radius: 1rem;
    margin-left: 17rem;
`;

export const InputSearch = styled.input`
    margin-left: 2rem;
    width: 40rem;
    border: none;
    outline: none;
`;

export const LupaIcon = styled(Image)`
    margin-top: 0.5rem;
    margin-right: 1rem;
    height: 4rem;
    cursor: pointer;
`;

export const LupaDiv = styled.div`
    margin-right: 1.4rem;
    margin-top: 0.7rem;
`;

export const TrendingTopicsWrapper = styled.div`
    img {
        margin: 1rem;
    }
`;
