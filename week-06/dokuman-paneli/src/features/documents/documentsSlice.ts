import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type DocumentItem = {
  id: string;
  title: string;
  category: string;
  owner: string;
  date: string;
  sizeKb: number;
};

type DocumentsState = {
  items: DocumentItem[];
  searchTerm: string;
  selectedIds: string[];
  status: "idle" | "loading" | "error";
};

const initialState: DocumentsState = {
  items: [],
  searchTerm: "",
  selectedIds: [],
  status: "idle",
};

const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    setDocuments(state, action: PayloadAction<DocumentItem[]>) {
      state.items = action.payload;
      state.status = "idle";
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    toggleSelect(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter((x) => x !== id);
      } else {
        state.selectedIds.push(id);
      }
    },
    clearSelection(state) {
      state.selectedIds = [];
    },
  },
});

export const { setDocuments, setSearchTerm, toggleSelect, clearSelection } =
  documentsSlice.actions;

export default documentsSlice.reducer;
