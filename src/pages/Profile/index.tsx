import React from "react";
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

export default function Profile() {
  function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleChangePicture() {
    console.log("todo");
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
            src="https://github.com/felipe-borba.png"
            alt="Foto do usuário"
          />

          <Picture onClick={handleChangePicture}>
            <AiOutlineCamera size={20} color="black" />
          </Picture>
        </ChangeImage>

        <form onSubmit={handleUpdate}>
          <Group>
            <Input placeholder="Nome">
              <AiOutlineUser />
            </Input>

            <Input placeholder="E-mail">
              <AiOutlineMail />
            </Input>
          </Group>

          <Group>
            <Input placeholder="Senha atual">
              <AiOutlineLock />
            </Input>

            <Input placeholder="Nova senha">
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

const Picture = styled.div`
  padding: 14px;
  margin-left: 138px;
  position: fixed;
  top: 186px;

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
