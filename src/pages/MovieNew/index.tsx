import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/buttons/Button";
import ButtonBack from "../../components/buttons/ButtonBack";
import { Header } from "../../components/Header";
import { Input, InputContainer } from "../../components/Input";
import { MainLayout } from "../../components/layouts/MainLayout";
import TagCreator from "../../components/TagCreator";
import { api } from "../../services/api";

export default function MovieNew() {
  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const navigation = useNavigate();

  function handleAddMovie() {
    api
      .post("/movie-notes", {
        title,
        description,
        rating,
        tags,
      })
      .then((response) => {
        alert("Filme cadastrado!");
        navigation("/home");
      })
      .catch((error) => {
        // TODO code repetition
        if (error?.response) {
          alert(error.response.data.message);
        } else {
          alert("Nao foi possível cadastrar o filme!");
        }
      });
  }

  function handleClearData() {
    setTags([]);
    setTitle("");
    setRating(0);
    setDescription("");
  }

  return (
    <MainLayout header={<Header />} subHeader={<ButtonBack />}>
      <form>
        <Container>
          <h1>Novo filme</h1>

          <Section>
            <Input
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            />
          </Section>

          <InputContainer>
            <textarea  value={description} onChange={(e) => setDescription(e.target.value)}/>
          </InputContainer>

          <TagCreator tags={tags} setTags={setTags} />

          <Section>
            <Button alt onClick={handleClearData}>
              Excluir filme
            </Button>
            <Button onClick={handleAddMovie}>Salvar alterações</Button>
          </Section>
        </Container>
      </form>
    </MainLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  textarea {
    height: 274px;
    resize: none;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
