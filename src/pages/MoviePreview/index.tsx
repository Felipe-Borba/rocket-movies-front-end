import { MdOutlineWatchLater } from "react-icons/md";
import { MainLayout } from "../../components/layouts/MainLayout";
import { StarCounter } from "../../components/StarCounter";
import { TagGroup } from "../../components/TagGroup";
import { Info, Title, TopSection } from "./styles";
import { Header } from "../../components/Header";
import ButtonBack from "../../components/buttons/ButtonBack";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

export const MoviePreview = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [photo, setPhoto] = useState();

  useEffect(() => {
    api
      .get(`movie-notes/${params.id}`)
      .then((response) => {
        const movie = response.data;
        console.log(movie);

        setTitle(movie.title);
        setRating(movie.rating);
        setTags(movie?.tags.map((tag: any) => tag.name));
        setUpdatedAt(movie.updated_at);
        setDescription(movie.description);
        setAuthor(movie.user.name);

        //TODO code repetition
        const avatarUrl = movie.user.avatar
          ? `${api.defaults.baseURL}/files/${movie.user.avatar}`
          : avatarPlaceHolder;
        setPhoto(avatarUrl);
      })
      .catch((error) => {
        // TODO code repetition
        if (error?.response) {
          alert(error.response.data.message);
        } else {
          alert("Filme nao encontrado!");
        }
      });
  }, []);

  return (
    <MainLayout header={<Header />} subHeader={<ButtonBack />}>
      <TopSection>
        <Title>
          <h1>{title}</h1>
          <StarCounter ratting={rating} size={20} />
        </Title>

        <Info>
          <span>
            <img src={photo} alt="Foto do usuário" />
            Por {author}
          </span>
          <span>
            <MdOutlineWatchLater />
            {updatedAt}
          </span>
        </Info>
      </TopSection>

      <TagGroup tags={tags} />

      <p>{description}</p>
    </MainLayout>
  );
};
