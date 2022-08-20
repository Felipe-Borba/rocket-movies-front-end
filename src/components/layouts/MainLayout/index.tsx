import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { Header } from "../../Header";
import { Container, Content } from "./styles";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = (props) => {
  const {children} = props;

  return (
    <Container>
      <Header />

      <main>
        <Content>
          {children}
        </Content>
      </main>
    </Container>
  );
};
