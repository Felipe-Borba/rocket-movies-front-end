import React from "react";
import styled from "styled-components";
import { Input } from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, User } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

interface Props {}

export const Header: React.FC<Props> = () => {
  const navigate = useNavigate()
  const {signOut} = useAuth()

  const { data } = useAuth();
  const user = data.user! as User;
  //TODO code repetition
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  function handleExit() {
    signOut()
    navigate("/sign-in");
  }

  return (
    <Container>
      <Link to="/home">
        <Title>RocketMovies</Title>
      </Link>

      <Input placeholder="Pesquisar pelo título"></Input>

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <a onClick={handleExit}>sair</a>
        </div>

        <Link to="/profile">
          <img
            src={avatarUrl}
            alt="Foto do usuário"
          />
        </Link>
      </Profile>
    </Container>
  );
};

const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.PRIMARY_400};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  img {
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
      white-space: nowrap;
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.SECONDARY_100};
    }
  }
`;

const Container = styled.header`
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
