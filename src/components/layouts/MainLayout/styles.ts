import styled from "styled-components";

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
