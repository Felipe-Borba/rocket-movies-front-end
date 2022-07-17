import React, { startTransition } from "react";
import styled from "styled-components";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface Props {
  title: string;
  ratting: number;
  description: string;
  tags: string[];
}
export const Section: React.FC<Props> = (props) => {
  const { title, ratting, description, tags } = props;

  const stars = [
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
  ].fill(<AiFillStar />, 0, ratting);

  return (
    <Container>
      <h2>{title}</h2>
      <div id="stars">
        {stars.map((star, index) =>
          React.cloneElement(star, { key: index })
        )}
      </div>
      <p>{description}</p>
      <div id="tags">
        {tags.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
      </div>
    </Container>
  );
};

const Tag = styled.span`
  padding: 5px 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.SECONDARY_100};
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const Container = styled.div`
  padding: 32px;
  height: fit-content;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  border-radius: 16px;

  > h2 {
    margin-bottom: 9px;

    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  > #stars {
    margin-bottom: 15px;

    display: flex;
    flex-direction: row;
    gap: 6.5px;
    svg {
      color: ${({ theme }) => theme.COLORS.PRIMARY_400};
    }
  }

  > p {
    margin-bottom: 15px;
    width: 100%;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }

  > #tags {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;
