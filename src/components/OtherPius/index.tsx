import { useEffect, useState } from 'react';
import Image from 'next/image';

import * as S from './styles';

import Like from '../../assets/images/Feed/likeIcon.svg';
import Likered from '../../assets/images/Feed/likeredIcon.svg';
import Repiu from '../../assets/images/Feed/repiuIcon.svg';
import RepiuRed from '../../assets/images/Feed/repiuRedIcon.svg';
import Replie from '../../assets/images/Feed/replieIcon.svg';
import Loading from '../../assets/images/Feed/LoadGif.gif';

import { useAuth } from '../../hooks/useAuth';
import api from '../../../service/api';
import { IPiu } from '../../models';

const Otherpius: React.FC<IPiu> = ({ user, likes, text, id }) => {
    const { token } = useAuth();
    const { user: User } = useAuth();

    const deletePiu = async (piu_id: string) => {
        if (user.username === User.username) {
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
    const [numLike, setnumLike] = useState(likes.length);

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

    const GetMyFav = async () => {
        const response = await api.get(`/users?username=${User.username}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        let fav = false;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fav = response.data[0].favorites.some((favorite: any) => {
            return id === favorite.id;
        });
        if (fav === true) {
            setRedFav(RepiuRed);
        } else {
            setRedFav(Repiu);
        }
    };

    const GetMyLikes = async () => {
        const response = await api.get(`/users?username=${User.username}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        let liked = false;
        liked = likes.some((like) => {
            return like.user.id === response.data[0].id;
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
            favoritePius(id);
        }
        if (redFav === RepiuRed) {
            unfavoritePius(id);
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
                    <Image src={user.photo} alt="imagem de perfil" />
                    <S.FirstName>{user.first_name}</S.FirstName>
                </div>
                <S.Arroba>{`@${user.username}`}</S.Arroba>
            </S.PrincipalWrapper>
            <S.PiuTextWrapper>
                <S.Text>{text}</S.Text>
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
                            likePius(id);
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
                            delete={user.username === User.username}
                            onClick={() => deletePiu(id)}
                        >
                            Apagar
                        </S.DeletePiu>
                        <button type="submit" onClick={() => Follow(id)}>
                            follow
                        </button>
                    </S.Buttons>
                </S.InterationsWrapper>
            </S.PiuTextWrapper>
        </S.OtherPiusWrapper>
    );
};

export default Otherpius;
