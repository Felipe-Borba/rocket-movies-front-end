import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

interface Props {
  ratting: number;
}
export const StarCounter: React.FC<Props> = (props) => {
  const { ratting } = props;

  const Star = ({ starId }: { starId: number }) => {
    if (starId <= ratting) {
      return <AiFillStar size={20} />;
    } else {
      return <AiOutlineStar size={20} />;
    }
  };

  return (
    <Container>
      <Star starId={1} />
      <Star starId={2} />
      <Star starId={3} />
      <Star starId={4} />
      <Star starId={5} />
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
