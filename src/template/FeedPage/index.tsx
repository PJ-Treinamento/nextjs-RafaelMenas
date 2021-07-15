import React, { useState, useEffect } from 'react';

import * as S from './styles';

import PageHeader from '../../components/PageHeader';
import PageBrowser from '../../components/PageBrowser';
import Mypiu from '../../components/MyPiu';
import Otherpius from '../../components/OtherPius';
import Subjects from '../../components/Subjects';
import { useAuth } from '../../hooks/useAuth';
import { IPiu } from '../../models';
import api from '../../../service/api';

function Feed() {
    const { token } = useAuth();

    const [pius, setPius] = useState<IPiu[]>([]);

    useEffect(() => {
        const getPius = async () => {
            const responsePius = await api.get('/pius', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setPius(responsePius.data);
        };
        getPius();
    }, [token]);

    const [search, setSearch] = useState('');

    return (
        <S.FeedWrapper>
            <S.HeaderWrapper>
                <PageHeader search={search} setSearch={setSearch} />
            </S.HeaderWrapper>
            <S.UnheadFeed>
                <PageBrowser />
                <S.MiddleFeed>
                    <S.EveryPiu>
                        <S.Piu>
                            <Mypiu />
                            <S.GreyBar />
                            {pius.map((piu) => {
                                if (
                                    search === '' ||
                                    piu.user.username
                                        .toLowerCase()
                                        .includes(search.toLowerCase()) ||
                                    piu.user.last_name
                                        .toLowerCase()
                                        .includes(search.toLowerCase()) ||
                                    piu.user.first_name
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                ) {
                                    return <Otherpius key={piu.id} {...piu} />;
                                }
                                return null;
                            })}
                        </S.Piu>
                    </S.EveryPiu>
                </S.MiddleFeed>
                <Subjects />
            </S.UnheadFeed>
        </S.FeedWrapper>
    );
}

export default Feed;
