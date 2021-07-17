import React, { useState } from 'react';

import * as S from './styles';

import PageHeader from '../../components/PageHeader';
import PageBrowser from '../../components/PageBrowser';
import Mypiu from '../../components/MyPiu';
import Otherpius from '../../components/OtherPius';
import Subjects from '../../components/Subjects';
import { IPiu, IUser } from '../../models';

export type FeedProps = {
    user: IUser;
    pius: IPiu[];
    users?: IPiu[];
};

const Feed: React.FC<FeedProps> = ({ user, pius }) => {
    const [search, setSearch] = useState('');

    return (
        <S.FeedWrapper>
            <S.HeaderWrapper>
                <PageHeader setSearch={setSearch} user={user} />
            </S.HeaderWrapper>
            <S.UnheadFeed>
                <PageBrowser />
                <S.MiddleFeed>
                    <S.EveryPiu>
                        <S.Piu>
                            <Mypiu user={user} />
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
                                    return (
                                        <Otherpius
                                            key={piu.id}
                                            {...piu}
                                            user={user}
                                            piu={piu}
                                        />
                                    );
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
};

export default Feed;
