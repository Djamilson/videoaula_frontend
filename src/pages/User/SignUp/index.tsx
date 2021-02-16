import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiCheck, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../../_services/api';
import logoImg from '../../../assets/proffy.png';
import Input from '../../../components/Form/Input';
import { useLoading } from '../../../hooks/loading';
import { useToast } from '../../../hooks/toast';
import authRoutes from '../../../routes/Routes/AuthRoutes';
import getValidationErros from '../../../utils/getValidationErros';
import { MyButton } from '../Login/SignIn/styles';
import { AnimationContainer, Background, Container, Content } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  pessword: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { addLoading, removeLoading } = useLoading();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        addLoading({
          loading: true,
          description: 'Aguarde ...',
        });

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(6, 'No mínimo 6 digitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', { ...data, nameGroup: 'role-student' });
        history.push(authRoutes.signin);

        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso!',
          description: 'Você já pode fazer seu logon no Proffy!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Falha no cadastro!',
          description:
            'Ocorreu uma falha ao tentar fazer o cagastro, tente novamente!',
        });
      } finally {
        removeLoading();
      }
    },
    [addToast, addLoading, removeLoading, history],
  );

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Proffy" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Sua senha"
            />
            <MyButton type="submit">
              <span>
                <FiCheck />
              </span>
              <strong>Cadastra</strong>
            </MyButton>
          </Form>
          <button type="button" onClick={() => goBack()}>
            <FiArrowLeft />
            Voltar
          </button>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
