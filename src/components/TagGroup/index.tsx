import React from "react";
import styled from "styled-components";
import { Tag } from "./Tag";

interface Props {
  tags: string[];
}
export const TagGroup: React.FC<Props> = (props) => {
  const { tags } = props;
  return (
    <Container>
      {tags.map((tag, index) => {
        return <Tag key={index}>{tag}</Tag>;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
