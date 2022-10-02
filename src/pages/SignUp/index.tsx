import React, { useState } from "react";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Button } from "../../components/buttons/Button";
import { ButtonText } from "../../components/buttons/ButtonText";
import { Input } from "../../components/Input";
import SigInLayout from "../../components/layouts/SignInLayout";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then((response) => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/sig-in");
      })
      .catch((error) => {
        if(error?.response) {
          alert(error.response.data.message)
        } else {
          alert('Nao foi possível cadastrar!')
        }
      });

  }

  return (
    <SigInLayout sectionText="Crie sua conta">
      <form onSubmit={handleSignUp}>
        <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        >
          <AiOutlineUser />
        </Input>

        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        >
          <AiOutlineMail />
        </Input>

        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        >
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
