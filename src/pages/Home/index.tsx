import styled from "styled-components";
import { Button } from "../../components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { MainLayout } from "../../components/layouts/MainLayout";

export const Home = () => {
  return (
    <MainLayout subHeader={
        <TopSection>
          <h1>Meus filmes</h1>
          <Button>
            <AiOutlinePlus size={16} />
            Adicionar filme
          </Button>
        </TopSection>
    }>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto illo tempore facilis fugit suscipit voluptates fuga. Sunt eaque obcaecati natus hic, rem quae, similique modi pariatur, est perspiciatis voluptates!
      </p>
    </MainLayout>
  );
};

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > button {
    height: 48px;
    width: fit-content;
  }
`;
