import React from "react";
import styled from "styled-components";
import { Input } from "../Input";

interface Props {}
export const Header: React.FC<Props> = () => {
  return (
    <Container>
      <Title>RocketMovies</Title>

      <Input placeholder="Pesquisar pelo título"></Input>

      <Profile>
        <div>
          <strong>Felipe Borba</strong>
          <a>sair</a>
        </div>

        <img src="https://github.com/felipe-borba.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
};

const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 18px;

    a {
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.SECONDARY_400};
    }

    strong {
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.SECONDARY_100};
    }
  }
`;

const Container = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 123px;
  gap: 64px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;
