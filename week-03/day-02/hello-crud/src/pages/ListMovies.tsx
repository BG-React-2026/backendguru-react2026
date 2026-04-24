import { useDeleteMovie, useMovies } from "../hooks/useMovies";

const ListMovies = () => {
  const { data: movies } = useMovies();

  const { mutate: deleteMovie } = useDeleteMovie();
  return (
    <ul>
      {movies?.map(({ id, name }) => (
        <li key={id}>
          {name}
          <button onClick={() => deleteMovie(id)}>Sil</button>
        </li>
      ))}
    </ul>
  );
};

export default ListMovies;
