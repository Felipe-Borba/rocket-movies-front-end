import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { Header } from "../../Header";
import { Container, Content, TopSection } from "./styles";

interface Props {
  children: React.ReactNode;
  subHeader: React.ReactNode;
}

export const MainLayout: React.FC<Props> = (props) => {
  const { children, subHeader } = props;

  return (
    <Container>
      <Header />

      <main>
        <TopSection>{subHeader}</TopSection>
        <Content>{children}</Content>
      </main>
    </Container>
  );
};
