import { useAddMovie } from "../hooks/useMovies";

const AddMovie = () => {
  const { mutate: addMovie } = useAddMovie();

  const handleSubmit = ({
    preventDefault,
    currentTarget,
  }: React.SubmitEvent<HTMLFormElement>) => {
    preventDefault();

    const formData = new FormData(currentTarget);
    const movieName = formData.get("movieName")?.toString();
    const movieYear = formData.get("year")?.toString();
    const movieDirector = formData.get("director")?.toString();

    addMovie({ name: movieName!, year: movieYear, director: movieDirector });
  };

  // State yoksa uncontrolled'tır
  // Uncontrolled input
  // Uncontrolled form
  return (
    <form onSubmit={handleSubmit}>
      <input name="movieName" />
      <input name="year" />
      <input name="director" />
      <button>Ekle</button>
    </form>
  );
};

export default AddMovie;
