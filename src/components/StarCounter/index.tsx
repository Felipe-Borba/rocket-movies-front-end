import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

interface Props {
  ratting: number;
}
export const StarCounter: React.FC<Props> = (props) => {
  const { ratting } = props;

  const stars = [
    <AiOutlineStar size={20} />,
    <AiOutlineStar size={20} />,
    <AiOutlineStar size={20} />,
    <AiOutlineStar size={20} />,
    <AiOutlineStar size={20} />,
  ].fill(<AiFillStar size={20} />, 0, ratting);

  return (
    <Container>
      {stars.map((star, index) => React.cloneElement(star, { key: index }))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 6.5px;
  svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY_400};
  }
`;
