import React, { useState } from "react";
import { Input } from "../../components/Input";
import SigInLayout from "../../components/layouts/SignInLayout";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { Button } from "../../components/buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import { ButtonText } from "../../components/buttons/ButtonText";
import { useAuth } from "../../hooks/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signIn, data } = useAuth();

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await signIn({ email, password });
    
    navigate("/home");
  }

  return (
    <SigInLayout sectionText="Faça seu login">
      <form onSubmit={handleSignIn}>
        <Input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}>
          <AiOutlineMail />
        </Input>

        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        >
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
