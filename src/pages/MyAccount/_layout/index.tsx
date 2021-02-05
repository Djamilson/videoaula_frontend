import React from 'react';
import {
  FaPhoneAlt,
  FaShoppingBasket,
  FaUserEdit,
  FaEdit,
  FaUserCircle,
  FaWarehouse,
  FaUserShield,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Layout from '../../_layouts/auth';
import {
  Man,
  NavButton,
  ContainerDate,
  SideMenu,
  AnimationContainer,
  ItemLI,
  ContentInfo,
} from './styles';

const LayoutProfile: React.FC = ({ children }) => {
  return (
    <Layout>
      <Man>
        <NavButton>
          <header>
            <h2>Minha conta</h2>
          </header>
        </NavButton>
        <ContainerDate>
          <SideMenu>
            <div>
              <ul>
                <ItemLI>
                  <Link to="/orders">
                    <FaShoppingBasket />
                    <span>Pedidos</span>
                  </Link>
                </ItemLI>
                <ItemLI>
                  <Link to="/profile">
                    <FaUserEdit />
                    <span>Perfil</span>
                  </Link>
                </ItemLI>
                <ItemLI>
                  <Link to="/avatar">
                    <FaUserCircle />
                    <span>Avatar</span>
                  </Link>
                </ItemLI>
                <ItemLI>
                  <Link to="/passwords">
                    <FaUserShield />
                    <span>Senha</span>
                  </Link>
                </ItemLI>
                <ItemLI>
                  <Link to="/documents">
                    <FaEdit />
                    <span>Documentos</span>
                  </Link>
                </ItemLI>
                <ItemLI>
                  <Link to="/addresses">
                    <FaWarehouse />
                    <span>Endereço</span>
                  </Link>
                </ItemLI>
                <ItemLI>
                  <Link to="/phones">
                    <FaPhoneAlt />
                    <span>Fone</span>
                  </Link>
                </ItemLI>
              </ul>
            </div>
          </SideMenu>
          <ContentInfo>
            <AnimationContainer>{children}</AnimationContainer>
          </ContentInfo>
        </ContainerDate>
      </Man>
    </Layout>
  );
};

export default LayoutProfile;
