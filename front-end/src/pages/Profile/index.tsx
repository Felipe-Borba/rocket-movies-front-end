import React, { useState } from "react";
import {
  AiOutlineCamera,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import styled from "styled-components";
import { Button } from "../../components/buttons/Button";
import ButtonBack from "../../components/buttons/ButtonBack";
import { Input } from "../../components/Input";
import { MainLayout } from "../../components/layouts/MainLayout";
import { useAuth, User } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

export default function Profile() {
  const { data } = useAuth();
  const user = data.user! as User;
  const { updateUser } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [password, setPassword] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder
  const [avatar, setAvatar] = useState(avatarUrl);

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateUser({ name, email, password, passwordOld });
  }

  function handleChangePicture(e: any) {
    const file = e.target.files[0]

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <MainLayout
      header={
        <Header>
          <ButtonBack />
        </Header>
      }
    >
      <Container>
        <ChangeImage>
          <img
            src={avatar}
            alt="Foto do usuário"
          />

          <Picture htmlFor='avatar' onChange={handleChangePicture}>
            <input id='avatar' hidden type='file'/>
            <AiOutlineCamera size={20} color="black" />
          </Picture>
        </ChangeImage>

        <form onSubmit={handleUpdate}>
          <Group>
            <Input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <AiOutlineUser />
            </Input>

            <Input
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <AiOutlineMail />
            </Input>
          </Group>

          <Group>
            <Input
              placeholder="Senha atual"
              type="password"
              value={passwordOld}
              onChange={(e) => setPasswordOld(e.target.value)}
            >
              <AiOutlineLock />
            </Input>

            <Input
              placeholder="Nova senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              <AiOutlineLock />
            </Input>
          </Group>

          <Group>
            <Button type="submit">Salvar</Button>
          </Group>
        </form>
      </Container>
    </MainLayout>
  );
}

const ChangeImage = styled.div`
  position: fixed;
  top: 51px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
`;

const Picture = styled.label`
  padding: 14px;
  margin-left: 138px;
  position: fixed;
  top: 186px;
  display: flex;
  flex-direction: row-reverse;

  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_400};
  border-radius: 50%;
`;

const Header = styled.div`
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 144px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 157px;
`;

const Group = styled.div`
  margin-top: 24px;
  width: 340px;
`;
