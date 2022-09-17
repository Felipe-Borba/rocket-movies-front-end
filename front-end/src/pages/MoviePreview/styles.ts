import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  gap: 19px;

  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;

  img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  svg {
    size: 16px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_400};
  }

  span {
    display: flex;
    align-items: center;
    gap: 7px;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
