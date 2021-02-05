import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

import { colors } from '../../../../styles';
import { Container, NavigationLink, OrderLI, Badge } from './styles';

interface IProps {
  isActive: boolean;
  handleToggleMenu(): void;
  handleSignOut(): void;
}

const MenuResponsive: React.FC<IProps> = ({
  isActive,
  handleToggleMenu,
  handleSignOut,
}) => {
  return (
    <Container visible={isActive} className={isActive ? 'active' : ''}>
      <ul>
        <OrderLI>
          <NavigationLink
            to="/home"
            aria-label="Home"
            onClick={handleToggleMenu}
          >
            Home
          </NavigationLink>
        </OrderLI>

        <OrderLI>
          <NavigationLink
            to="/profile"
            aria-label="Meu perfil"
            onClick={() => handleToggleMenu()}
          >
            MEU PERFIL
          </NavigationLink>
        </OrderLI>
        <OrderLI>
          <Badge onClick={handleSignOut} title="Sair">
            <FaSignOutAlt color={colors.third} size={28} />
          </Badge>
        </OrderLI>
      </ul>
    </Container>
  );
};

export default MenuResponsive;
