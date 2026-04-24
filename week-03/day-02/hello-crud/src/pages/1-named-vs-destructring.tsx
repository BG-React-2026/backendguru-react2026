import { useMovies } from "../hooks/useMovies";

const ListMovies = () => {
  const { data: movies } = useMovies();
  return (
    <ul>
      {/* Named parameter = Parametreye biz isim veririz */}
      {movies?.map((film) => (
        <li key={film.id}>{film.name}</li>
      ))}
      {/* Object Destructring = isim vermeden içini açıyoruz */}
      {movies?.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default ListMovies;
