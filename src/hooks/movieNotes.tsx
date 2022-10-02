import { useState } from "react";
import { api } from "../services/api";

export function useMovieNotes() {
  const [movies, setMovies] = useState<MovieNote[]>([]);

  async function searchMovie(title: string) {
    api
      .get("/movie-notes", { params: { title } })
      .then((response) => {
        const movies = response.data;
        console.log(movies);
        
        setMovies(movies);
      })
      .catch((error) => {
        // TODO code repetition
        if (error?.response) {
          alert(error.response.data.message);
        }
      });
  }

  return { movies, searchMovie };
}

interface MovieNote {
  id: number;
  title: string;
  description: string;
  rating: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  tags: [
    {
      id: number;
      name: string;
      user_id: number;
      movie_id: number;
    }
  ];
}
