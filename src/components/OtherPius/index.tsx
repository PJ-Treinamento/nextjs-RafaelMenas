import { useEffect, useState } from 'react';
import Image from 'next/image';

import { parseCookies } from 'nookies';
import * as S from './styles';

import Like from '../../assets/images/Feed/likeIcon.svg';
import Likered from '../../assets/images/Feed/likeredIcon.svg';
import Repiu from '../../assets/images/Feed/repiuIcon.svg';
import RepiuRed from '../../assets/images/Feed/repiuRedIcon.svg';
import Replie from '../../assets/images/Feed/replieIcon.svg';
import Loading from '../../assets/images/Feed/LoadGif.gif';
import perfilImg from '../../assets/images/Feed/perfilIcon.svg';

import api from '../../../service/api';
import { IPiu, IUser } from '../../models';

type OtherPiusProps = {
    user: IUser;
    piu: IPiu;
};

const Otherpius: React.FC<OtherPiusProps> = ({ user, piu }) => {
    let { photo } = piu.user;
    const { '@Project:token': token } = parseCookies();

    if (photo === '.....') photo = perfilImg;

    const deletePiu = async (piu_id: string) => {
        if (piu.user.username === user.username) {
            await api.delete('/pius', {
                headers: { Authorization: `Bearer ${token}` },
                data: {
                    piu_id
                }
            });
            window.location.reload();
        }
    };

    const [redLike, setRedLike] = useState(Loading);
    const [numLike, setnumLike] = useState(piu.likes.length);

    const likePius = async (piu_id: string) => {
        const responseLike = await api.post(
            '/pius/like',
            { piu_id },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );
        if (responseLike.data.operation === 'like') {
            setRedLike(Likered);
            setnumLike(numLike + 1);
        } else {
            setRedLike(Like);
            setnumLike(numLike - 1);
        }
    };

    const [redFav, setRedFav] = useState(Loading);

    const GetMyFav = () => {
        let fav = false;
        fav = user.favorites.some((favorite: IPiu) => {
            return piu.id === favorite.id;
        });
        if (fav === true) {
            setRedFav(RepiuRed);
        } else {
            setRedFav(Repiu);
        }
    };

    const GetMyLikes = () => {
        let liked = false;
        liked = piu.likes.some((like) => {
            return like.user.id === user.id;
        });
        if (liked === true) {
            setRedLike(Likered);
        } else {
            setRedLike(Like);
        }
    };

    const favoritePius = async (piu_id: string) => {
        try {
            await api.post(
                '/pius/favorite',
                { piu_id },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
        } catch (error) {
            null;
        }
    };

    const unfavoritePius = async (piu_id: string) => {
        try {
            await api.post(
                '/pius/unfavorite',
                { piu_id },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
        } catch (error) {
            null;
        }
    };

    const favunfav = () => {
        if (redFav === Repiu) {
            setRedFav(RepiuRed);
            favoritePius(piu.id);
        }
        if (redFav === RepiuRed) {
            unfavoritePius(piu.id);
            setRedFav(Repiu);
        }
    };

    const Follow = async (followed_id: string) => {
        await api.post('/follow', {
            headers: { Authorization: `Bearer ${token}` },
            data: {
                followed_id
            }
        });
    };

    useEffect(() => {
        GetMyLikes();
        GetMyFav();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <S.OtherPiusWrapper>
            <S.PrincipalWrapper>
                <div>
                    <Image
                        src={photo || perfilImg}
                        alt="imagem de perfil"
                        width={50}
                        height={50}
                    />
                    <S.FirstName>{piu.user.first_name}</S.FirstName>
                </div>
                <S.Arroba>{`@${piu.user.username}`}</S.Arroba>
            </S.PrincipalWrapper>
            <S.PiuTextWrapper>
                <S.Text>{piu.text}</S.Text>
                <S.InterationsWrapper>
                    <S.ReplieWrapper>
                        <Image src={Replie} alt="Replie" />
                        <p>100</p>
                    </S.ReplieWrapper>
                    <S.RepiuWrapper onClick={() => favunfav()}>
                        <Image src={redFav} alt="Repiu" />
                    </S.RepiuWrapper>
                    <S.LikeWrapper
                        onClick={() => {
                            likePius(piu.id);
                        }}
                    >
                        <Image src={redLike} alt="Like" />
                        <p
                            style={{
                                color: redLike === Likered ? 'red' : 'black'
                            }}
                        >
                            {numLike}
                        </p>
                    </S.LikeWrapper>
                    <S.Buttons>
                        <S.DeletePiu
                            delete={piu.user.username === user.username}
                            onClick={() => deletePiu(piu.id)}
                        >
                            Apagar
                        </S.DeletePiu>
                        <button type="submit" onClick={() => Follow(piu.id)}>
                            follow
                        </button>
                    </S.Buttons>
                </S.InterationsWrapper>
            </S.PiuTextWrapper>
        </S.OtherPiusWrapper>
    );
};

export default Otherpius;
