import React from "react";
import { Container, Content, TopSection, Head } from "./styles";

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
  subHeader?: React.ReactNode;
}

export const MainLayout: React.FC<Props> = (props) => {
  const { children, subHeader, header } = props;

  return (
    <Container>
      <Head>{header}</Head>

      <main>
        {subHeader && <TopSection>{subHeader}</TopSection>}
        <Content>{children}</Content>
      </main>
    </Container>
  );
};
