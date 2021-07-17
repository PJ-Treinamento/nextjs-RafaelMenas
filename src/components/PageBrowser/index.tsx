import Image from 'next/image';
import Home from '../../assets/images/Feed/homeIcon.svg';
import Explore from '../../assets/images/Feed/exploreIcon.svg';
import Notifications from '../../assets/images/Feed/notificIcon.svg';
import Messages from '../../assets/images/Feed/messageIcon.svg';
import MoreTools from '../../assets/images/Feed/otheroptIcon.svg';

import * as S from './styles';

import { useAuth } from '../../hooks/useAuth';

function PageBrowser() {
    const { logout } = useAuth();

    return (
        <S.Browser>
            <S.ToolsWrapper>
                <S.IconWrapper>
                    <S.IconHomeWrapper>
                        <Image src={Home} alt="Icone de casa" />
                        <p>Home</p>
                    </S.IconHomeWrapper>
                </S.IconWrapper>
                <S.IconWrapper>
                    <S.IconExploreWrapper>
                        <Image src={Explore} alt="Icone de exploração" />
                        <p>Explore</p>
                    </S.IconExploreWrapper>
                </S.IconWrapper>
                <S.IconWrapper>
                    <S.IconNotificationsWrapper>
                        <Image src={Notifications} alt="Icone de notificação" />
                        <p>Notifications</p>
                    </S.IconNotificationsWrapper>
                </S.IconWrapper>
                <S.IconWrapper>
                    <S.IconMessagesWrapper>
                        <Image src={Messages} alt="Icone de mensagem" />
                        <p>Messages</p>
                    </S.IconMessagesWrapper>
                </S.IconWrapper>
                <S.IconWrapper>
                    <S.IconMoreToolsWrapper>
                        <Image
                            src={MoreTools}
                            alt="Icone de mais ferramentas"
                        />
                        <p>More tools</p>
                    </S.IconMoreToolsWrapper>
                </S.IconWrapper>
            </S.ToolsWrapper>
            <S.LogOut onClick={() => logout()}>Log out</S.LogOut>
        </S.Browser>
    );
}

export default PageBrowser;
