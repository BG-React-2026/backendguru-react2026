import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

const selectItems = (s: RootState) => s.documents.items;
const selectSearchTerm = (s: RootState) => s.documents.searchTerm;
const selectSelectedIds = (s: RootState) => s.documents.selectedIds;

export const selectFilteredDocuments = createSelector(
  [selectItems, selectSearchTerm],
  (items, term) => {
    const q = term.toLowerCase().trim();
    if (!q) return items;
    return items.filter((d) => {
      return (
        d.title.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        d.owner.toLowerCase().includes(q) ||
        d.date.includes(q)
      );
    });
  },
);

export const selectSelectedCount = createSelector(
  [selectSelectedIds],
  (ids) => ids.length,
);

export const selectIsSelected = (id: string) =>
  createSelector([selectSelectedIds], (ids) => ids.includes(id));
