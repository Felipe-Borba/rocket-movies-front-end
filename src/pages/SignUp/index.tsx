import React from 'react'
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Button } from '../../components/buttons/Button';
import { ButtonText } from '../../components/buttons/ButtonText';
import { Input } from '../../components/Input';
import SigInLayout from '../../components/layouts/SignInLayout';
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/home");

  }

  return (
    <SigInLayout sectionText="Crie sua conta">
      <form onSubmit={handleSignUp}>
        <Input placeholder="Nome">
          <AiOutlineUser />
        </Input>

        <Input placeholder="E-mail">
          <AiOutlineMail />
        </Input>

        <Input placeholder="Senha">
          <AiOutlineLock />
        </Input>
        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/sign-in">
        <ButtonText>Voltar</ButtonText>
      </Link>
    </SigInLayout>
  );
}
