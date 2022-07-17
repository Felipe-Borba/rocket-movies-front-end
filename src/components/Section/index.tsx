import React from "react";
import styled from "styled-components";
import { StarCounter } from "../StarCounter";
import { Tag } from "../Tag";

interface Props {
  title: string;
  ratting: number;
  description: string;
  tags: string[];
}
export const Section: React.FC<Props> = (props) => {
  const { title, ratting, description, tags } = props;

  return (
    <Container>
      <h2>{title}</h2>
      <StarCounter ratting={ratting} />
      <p>{description}</p>
      <div id="tags">
        {tags.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
      </div>
    </Container>
  );
};

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
