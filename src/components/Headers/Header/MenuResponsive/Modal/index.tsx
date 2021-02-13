import React, { useRef, useEffect, useCallback } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

import { colors } from '../../../../../styles';
import IMenu from '../../../../../types/menu';
import {
  Background,
  Container,
  OrderLI,
  NavigationLink,
  Badge,
  ModalWrapper,
  CloseModalButton,
} from './styles';

interface IPropsModal {
  showModal: boolean;
  setShowModal: (item: boolean) => void;

  handleToggleMenu(): void;
  handleSignOut(): void;
  menus: IMenu[];
}

const Modal: React.FC<IPropsModal> = ({
  showModal,
  setShowModal,
  handleToggleMenu,
  menus,
  handleSignOut,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  /*
  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);*/

  return (
    <Background visible={showModal} onClick={handleToggleMenu} ref={modalRef}>
      <animated.div style={animation}>
        <ModalWrapper showModal={showModal}>
          <Container>
            {menus?.map((menu: IMenu) => {
              return (
                <OrderLI key={menu.path}>
                  <NavigationLink
                    to={menu.path}
                    aria-label={menu.label}
                    onClick={handleToggleMenu}
                    selected={menu.selected}
                  >
                    <span>{menu.label}</span>
                  </NavigationLink>
                </OrderLI>
              );
            })}

            <OrderLI>
              <NavigationLink
                to="/profile"
                aria-label="Meu perfil"
                onClick={() => handleToggleMenu()}
              >
                <span>Meu Perfil</span>
              </NavigationLink>
            </OrderLI>

            <OrderLI>
              <Badge onClick={handleSignOut} title="Sair">
                <FaSignOutAlt color={colors.third} size={28} />
              </Badge>
            </OrderLI>
          </Container>
        </ModalWrapper>
      </animated.div>
    </Background>
  );
};

export default Modal;
