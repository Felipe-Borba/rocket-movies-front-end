import styled from "styled-components";
import { Button } from "../../components/buttons/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { MainLayout } from "../../components/layouts/MainLayout";
import { MovieCard } from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useMovieNotes } from "../../hooks/movieNotes";

export const Home = () => {
  const navigate = useNavigate();
  const { movies, searchMovie } = useMovieNotes();

  return (
    <MainLayout
      header={<Header searchMovie={searchMovie} />}
      subHeader={
        <SubHeader>
          <h1>Meus filmes</h1>
          <Button onClick={() => navigate("/movie/new")}>
            <AiOutlinePlus size={16} />
            Adicionar filme
          </Button>
        </SubHeader>
      }
    >
      {movies?.map((movie) => {
        return (
          <MovieCard
            id={movie.id.toString()}
            title={movie.title}
            ratting={movie.rating}
            tags={movie.tags.map(tag => tag.name)}
            description={movie.description}
          />
        );
      })}
    </MainLayout>
  );
};

const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > button {
    height: 48px;
    width: fit-content;
  }
`;
