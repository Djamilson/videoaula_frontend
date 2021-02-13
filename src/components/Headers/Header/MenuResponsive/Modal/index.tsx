import React, { useRef, useEffect, useCallback } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';

import styled from 'styled-components';

import { colors } from '../../../../../styles';
import IMenu from '../../../../../types/menu';
import { Container, OrderLI, NavigationLink, Badge } from './styles';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
`;

interface IProps {
  showModal: boolean;
}
const ModalWrapper = styled.div<IProps>`
  width: calc(100% -100px);
  height: calc(100% +100px);
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  display: flex;
  justify-content: flex-end;
  align-items: initial;
  z-index: 10;
  margin-right: calc(100% -100px);
  border-radius: 2px;
  border: 1px solid #ff0;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  z-index: 10;
  border: 2px solid ${colors.colorLineInWhite};
  border-radius: 50%;
  padding: 5px;
`;
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
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
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

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal(!showModal)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
