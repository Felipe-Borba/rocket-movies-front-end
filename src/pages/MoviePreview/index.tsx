import styled from "styled-components";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { StarCounter } from "../../components/StarCounter";
import { TagGroup } from "../../components/TagGroup";

export const MoviePreview = () => {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <TopSection>
            <ButtonText>
              <AiOutlineArrowLeft />
              Voltar
            </ButtonText>

            <Title>
              <h1>Interestellar</h1>
              <StarCounter ratting={4} />
            </Title>

            <Info>
              <span>
                <img
                  src="https://github.com/felipe-borba.png"
                  alt="Foto do usuário"
                />
                Por Felipe Borba
              </span>
              <span>
                <MdOutlineWatchLater />
                23/05/22 as 08:00
              </span>
            </Info>
          </TopSection>

          <TagGroup tags={["Ficção Científica", "Drama", "Família"]} />

          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
            "fantasma" é uma inteligência desconhecida que está enviando
            mensagens codificadas através de radiação gravitacional, deixando
            coordenadas em binário que os levam até uma instalação secreta da
            NASA liderada pelo professor John Brand. O cientista revela que um
            buraco de minhoca foi aberto perto de Saturno e que ele leva a
            planetas que podem oferecer condições de sobrevivência para a
            espécie humana. As "missões Lázaro" enviadas anos antes
            identificaram três planetas potencialmente habitáveis orbitando o
            buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em
            homenagem aos astronautas que os pesquisaram. Brand recruta Cooper
            para pilotar a nave espacial Endurance e recuperar os dados dos
            astronautas; se um dos planetas se mostrar habitável, a humanidade
            irá seguir para ele na instalação da NASA, que é na realidade uma
            enorme estação espacial. A partida de Cooper devasta Murphy. Além de
            Cooper, a tripulação da Endurance é formada pela bióloga Amelia,
            filha de Brand; o cientista Romilly, o físico planetário Doyle, além
            dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem
            a Miller, porém descobrem que o planeta possui enorme dilatação
            gravitacional temporal por estar tão perto de Gargântua: cada hora
            na superfície equivale a sete anos na Terra. Eles entram em Miller e
            descobrem que é inóspito já que é coberto por um oceano raso e
            agitado por ondas enormes. Uma onda atinge a tripulação enquanto
            Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando
            a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem
            que 23 anos se passaram.
          </p>
        </Content>
      </main>
    </Container>
  );
};

const Title = styled.div`
  display: flex;
  gap: 19px;

  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
  }
`;

const Info = styled.div`
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

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const Content = styled.div`
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

const Container = styled.div`
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
