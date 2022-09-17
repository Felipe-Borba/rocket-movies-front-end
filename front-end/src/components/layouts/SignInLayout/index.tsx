import React from "react";
import styled from "styled-components";
import SignInBackground from "../../../../public/signInBackground.png"


interface Props {
  sectionText: string;
  children: React.ReactNode;
}


export default function SigInLayout(props: Props) {
  const {children, sectionText} = props;

  return (
    <Container>
      <Content>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <h2>{sectionText}</h2>

        <SubSection>{children}</SubSection>
      </Content>
      <Image/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Content = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 230px 134px 0;

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;

    color: ${({ theme }) => theme.COLORS.PRIMARY_400};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }
`;

const Image = styled.div`
  flex: 2;
  background-image: ${() => `url(${SignInBackground})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const SubSection = styled.div`
  > a {
    margin-top: 42px;
    display: flex;
    justify-content: center;
  }

  > form button {
    margin-top: 24px;
  }
`;