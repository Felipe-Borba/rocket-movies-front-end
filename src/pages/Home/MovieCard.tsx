import React from "react";
import styled from "styled-components";
import { StarCounter } from "../../components/StarCounter";
import { TagGroup } from "../../components/TagGroup";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  ratting: number;
  tags: string[];
  description: string;
  id: string;
}

export const MovieCard: React.FC<Props> = (props) => {
  const { title, ratting, tags, description, id } = props;
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/movie/${id}`)}>
      <Title>
        <h1>{title}</h1>
        <StarCounter ratting={ratting} size={12} />
      </Title>

      <Description>{description}</Description>

      <TagGroup tags={tags} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 43px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  border-radius: 16px;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
