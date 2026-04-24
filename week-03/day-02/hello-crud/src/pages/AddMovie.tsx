import { useAddMovie } from "../hooks/useMovies";
import type { Movie } from "../types/movie";
// State varsa controlled
// State yoksa uncontrolled
const AddMovie = () => {
  const { mutate: addMovie } = useAddMovie();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // FormData'yı object'e çevirir
    const values = Object.fromEntries(formData.entries());

    addMovie(values as Movie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <input name="year" />
      <input name="director" />
      <button>Ekle</button>
    </form>
  );
};

export default AddMovie;
