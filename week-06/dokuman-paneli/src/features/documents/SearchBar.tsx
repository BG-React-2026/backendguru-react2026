import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useDebounce } from "../../hooks/useDebounce";
import { setSearchTerm } from "./documentsSlice";

export function SearchBar() {
  const dispatch = useAppDispatch();
  const [local, setLocal] = useState("");
  const debounced = useDebounce(local, 200);

  useEffect(() => {
    dispatch(setSearchTerm(debounced));
  }, [debounced, dispatch]);

  return (
    <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="search"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder="Başlık, kategori, sahip veya tarihte ara..."
        className="grow"
      />
      {local && (
        <button
          type="button"
          onClick={() => setLocal("")}
          className="btn btn-ghost btn-xs btn-circle"
          aria-label="Temizle"
        >
          ✕
        </button>
      )}
    </label>
  );
}
