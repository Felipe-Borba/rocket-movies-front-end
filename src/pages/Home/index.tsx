import styled from "styled-components";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { AiOutlinePlus } from "react-icons/ai";

export const Home = () => {
  return (
    <Container>
      <Header />

      <Content>
        <TopSection>
          <h1>Meus filmes</h1>
          <Button>
            <AiOutlinePlus size={16} />
            Adicionar filme
          </Button>
        </TopSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  height: max-content;
  padding: 58px 123px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > button {
    width: fit-content;
  }
`;
