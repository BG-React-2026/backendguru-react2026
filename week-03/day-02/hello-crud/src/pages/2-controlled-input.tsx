import { useState } from "react";
import { useAddMovie } from "../hooks/useMovies";

const AddMovie = () => {
  // usss
  const [movieName, setMovieName] = useState("");

  const { mutate: filmEkle } = useAddMovie();

  console.log("RENDERED");

  return (
    <div>
      <input
        value={movieName}
        onChange={({ target: { value } }) => setMovieName(value)}
      />
      <button onClick={() => filmEkle({ name: movieName })}>Ekle</button>
    </div>
  );
};

export default AddMovie;
