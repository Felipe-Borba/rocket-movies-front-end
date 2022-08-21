import React from "react";
import { Input } from "../../components/Input";
import SigInLayout from "../../components/layouts/SignInLayout";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { Button } from "../../components/buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import { ButtonText } from "../../components/buttons/ButtonText";

export default function SignIn() {
  const navigate = useNavigate();

  function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <SigInLayout sectionText="Faça seu login">
      <form onSubmit={handleSignIn}>
        <Input placeholder="E-mail">
          <AiOutlineMail />
        </Input>
        <Input placeholder="Senha">
          <AiOutlineLock />
        </Input>
        <Button type="submit">Entrar</Button>
      </form>

      <Link to="/sign-up">
        <ButtonText>CriarConta</ButtonText>
      </Link>
    </SigInLayout>
  );
}
