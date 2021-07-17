import { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';
import Feed from '../../template/FeedPage';
import { IPiu, IUser } from '../../models';
import api from '../../../service/api';

export type FeedPageProps = {
    user: IUser;
    pius: IPiu[];
    users: IPiu[];
};

const teste: NextPage<FeedPageProps> = ({ pius, user, users }) => (
    <Feed user={user} users={users} pius={pius} />
);

export default teste;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { '@Project:token': token } = parseCookies(ctx);
    const { '@Project:username': username } = parseCookies(ctx);

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        };
    }
    const piusList = await api.get('/pius', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const myUser = await api.get(`/users?username=${username}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const allUsers = await api.get('/users', {
        headers: {
            Authorization: `Bearer: ${token}`
        }
    });
    const pius: IPiu = piusList.data;
    const user: IUser = myUser.data[0];
    const users: IUser[] = allUsers.data;

    return {
        props: {
            pius,
            user,
            users
        }
    };
};
