import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

interface Props {
  ratting: number;
}
export const StarCounter: React.FC<Props> = (props) => {
  const { ratting } = props;

  const stars = [
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
  ].fill(<AiFillStar />, 0, ratting);

  return (
    <Container>
      {stars.map((star, index) => React.cloneElement(star, { key: index }))}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  gap: 6.5px;
  svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY_400};
  }
`;
