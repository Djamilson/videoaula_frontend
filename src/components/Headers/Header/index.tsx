import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FiPower } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';

import logoImg from '../../../assets/images/logo.svg';
import { useAuth } from '../../../hooks/auth';
import ButtonMenu from './ButtonMenu';
import MenuResponsive from './MenuResponsive';
import Navigation from './Navigation';
import {
  Container,
  Content,
  NavLink,
  Profile,
  ProfileLink,
  Badge,
  Box,
} from './styles';

interface IMenu {
  label: string;
  path: string;
  selected: boolean;
}
const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  const nameUser = user?.person.name.split(' ')[0];
  const url_avatar = user?.person.avatar_url;
  const { menus } = user;

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement>(null);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleToggleMenu = useCallback(() => {
    setToggleMenu(!toggleMenu);
    setModalOpen(!modalOpen);
  }, [setToggleMenu, toggleMenu, modalOpen, setModalOpen]);

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

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <Container ref={headerRef} visible={sticky.isSticky}>
      <MenuResponsive
        handleSignOut={signOut}
        handleToggleMenu={handleToggleMenu}
        menus={menus}
        isOpen={modalOpen}
        setIsOpen={toggleModal}
      />
      <Content>
        <Box>
          <NavLink to="/dashboard">
            <img src={logoImg} alt="Proffy" />
          </NavLink>
          <ButtonMenu handleClick={handleToggleMenu} isActive={toggleMenu} />
          <Navigation handleToggleMenu={handleToggleMenu} menus={menus} />
        </Box>
        <Profile>
          <ProfileLink to="/profile">
            <div>
              <strong>Bem-vindo,</strong>
              <span>{nameUser}</span>
            </div>
            {url_avatar !== null ? (
              <img src={url_avatar} alt={nameUser} />
            ) : (
              <MdAccountCircle />
            )}
          </ProfileLink>

          <Badge type="button" onClick={signOut}>
            <strong>Sair</strong>
            <span>
              <FiPower />
            </span>
          </Badge>
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
