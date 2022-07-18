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

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  max-height: 70vh;
  overflow-y: scroll;

  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: justify;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 11vh auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    height: 89vh;
    padding: 40px 120px 140px;
  }
`;
