import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

import { colors } from '../../../../styles';
import IMenu from '../../../../types/menu';
import Modal from './Modal';
import { Container, NavigationLink, OrderLI, Badge } from './styles';

interface IProps {
  handleToggleMenu(): void;
  handleSignOut(): void;
  menus: IMenu[];
  isOpen: boolean;
  setIsOpen: () => void;
}

const MenuResponsive: React.FC<IProps> = ({
  handleToggleMenu,
  handleSignOut,
  menus,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal
      handleToggleMenu={handleToggleMenu}
      menus={menus}
      handleSignOut={handleSignOut}
      showModal={isOpen}
      setShowModal={setIsOpen}
    />
  );
};

export default MenuResponsive;
