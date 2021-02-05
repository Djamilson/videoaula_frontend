import React from 'react';

import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import landingImg from '../../assets/images/landing.svg';
import logoImg from '../../assets/images/logo.svg';
import {
  Container,
  Box,
  ContainerLogo,
  Footer,
  ButtonsContainer,
  LinkStudy,
  LinkGiveClasses,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Box>
        <ContainerLogo>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </ContainerLogo>
        <img src={landingImg} alt="heroimage" />
      </Box>
      <Footer>
        <section>
          <h2>Seja bem vindo. </h2>
          <strong>O que deseja fazer?</strong>
        </section>

        <span>
          Total de 20 conexões
          <strong>
            já realizadas
            <img src={purpleHeartIcon} alt="Coração roxo" />
          </strong>
        </span>
        <ButtonsContainer>
          <LinkStudy to="/signin">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </LinkStudy>
          <LinkGiveClasses to="/signup">
            <img src={giveClassesIcon} alt="Dar aula" />
            Cadastre-se
          </LinkGiveClasses>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default Home;
