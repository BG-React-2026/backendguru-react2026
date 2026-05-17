import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clearSelection, toggleSelect } from "./documentsSlice";
import {
  selectFilteredDocuments,
  selectSelectedCount,
} from "./selectors";

const categoryStyle: Record<string, string> = {
  Fatura: "badge-info",
  Sözleşme: "badge-warning",
  Rapor: "badge-success",
  Sunum: "badge-secondary",
  Teklif: "badge-accent",
  Bordro: "badge-primary",
  Form: "badge-neutral",
  Tutanak: "badge-error",
};

export function DocumentList() {
  const dispatch = useAppDispatch();
  const filtered = useAppSelector(selectFilteredDocuments);
  const selectedCount = useAppSelector(selectSelectedCount);
  const selectedIds = useAppSelector((s) => s.documents.selectedIds);
  const totalCount = useAppSelector((s) => s.documents.items.length);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-base-content/70">
            <span className="font-semibold text-base-content">
              {filtered.length}
            </span>{" "}
            / {totalCount} doküman
          </span>
        </div>
        {selectedCount > 0 && (
          <div className="flex items-center gap-2">
            <span className="badge badge-primary badge-lg">
              {selectedCount} seçili
            </span>
            <button
              type="button"
              onClick={() => dispatch(clearSelection())}
              className="btn btn-ghost btn-sm"
            >
              Temizle
            </button>
          </div>
        )}
      </div>

      <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
        <table className="table table-sm table-pin-rows">
          <thead>
            <tr>
              <th className="w-10"></th>
              <th>ID</th>
              <th>Başlık</th>
              <th>Kategori</th>
              <th>Sahip</th>
              <th>Tarih</th>
              <th className="text-right">Boyut</th>
            </tr>
          </thead>
          <tbody>
            {filtered.slice(0, 200).map((doc) => {
              const isSelected = selectedIds.includes(doc.id);
              return (
                <tr
                  key={doc.id}
                  className={isSelected ? "bg-primary/10" : "hover:bg-base-200"}
                >
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      checked={isSelected}
                      onChange={() => dispatch(toggleSelect(doc.id))}
                    />
                  </td>
                  <td>
                    <code className="text-xs opacity-70">{doc.id}</code>
                  </td>
                  <td className="font-medium">{doc.title}</td>
                  <td>
                    <span
                      className={`badge badge-sm ${categoryStyle[doc.category] ?? "badge-ghost"}`}
                    >
                      {doc.category}
                    </span>
                  </td>
                  <td>{doc.owner}</td>
                  <td className="opacity-70">{doc.date}</td>
                  <td className="text-right tabular-nums">
                    {(doc.sizeKb / 1024).toFixed(1)} MB
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length > 200 && (
          <div className="border-t border-base-300 bg-base-200/50 px-4 py-2 text-xs text-base-content/60">
            Performans için ilk 200 satır gösteriliyor. Ders 12'de
            virtualization eklenecek.
          </div>
        )}
        {filtered.length === 0 && (
          <div className="px-4 py-8 text-center text-base-content/60">
            Sonuç bulunamadı.
          </div>
        )}
      </div>
    </div>
  );
}
