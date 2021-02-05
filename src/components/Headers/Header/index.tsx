import React, { useState, useMemo, useRef, useEffect } from 'react';
import { FiPower } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';

import logoImg from '../../../assets/images/logo.svg';
import { useAuth } from '../../../hooks/auth';
import Navigation from './Navigation';
import {
  Container,
  Content,
  NavLink,
  Profile,
  ProfileLink,
  Badge,
  NavMenu,
} from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  const nameUser = user?.person.name.split(' ')[0];
  const url_avatar = user?.person.avatar_url;

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement>(null);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }
  const [study, setStudy] = useState<boolean>(true);

  useMemo(() => {
    const newStudy = user.user_groups.filter((group) =>
      group.name.localeCompare('role-students'),
    );

    if (newStudy.length > 0) setStudy(false);
  }, [user]);

  useEffect(() => {
    if (!headerRef.current) return;

    const handleScrollEvent = () => {
      if (window.pageYOffset > 90) {
        setSticky({ isSticky: true, offset: window.pageYOffset });
      }
      if (window.pageYOffset < 9) {
        setSticky({ isSticky: false, offset: 0 });
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [setSticky]);

  return (
    <Container ref={headerRef} visible={sticky.isSticky}>
      <Content>
        <>
          <NavLink to="/dashboard">
            <img src={logoImg} alt="Ecommecer" />
          </NavLink>

          <NavMenu>
            <Navigation handleToggleMenu={handleToggleMenu} typeUser={study} />
          </NavMenu>
        </>

        <Profile>
          <ProfileLink to="/profile">
            <div>
              <strong>Bem-vindo,</strong>
              <span> {nameUser}</span>
            </div>
            {url_avatar !== null ? (
              <img src={url_avatar} alt={nameUser} />
            ) : (
              <MdAccountCircle />
            )}
          </ProfileLink>

          <Badge type="button" onClick={signOut}>
            <div>
              <span>Sair</span>
            </div>
            <FiPower size={32} color="#FFF" />
          </Badge>
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
