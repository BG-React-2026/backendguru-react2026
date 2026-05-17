import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import catalog from "../data/catalog.json";
import {
  setDocuments,
  type DocumentItem,
} from "../features/documents/documentsSlice";
import { DocumentList } from "../features/documents/DocumentList";
import { SearchBar } from "../features/documents/SearchBar";

export function DashboardRoute() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDocuments(catalog as DocumentItem[]));
  }, [dispatch]);

  return (
    <main className="flex flex-col gap-4 p-6">
      <SearchBar />
      <DocumentList />
    </main>
  );
}
