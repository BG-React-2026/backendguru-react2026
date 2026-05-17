// ~1000 kayıtlık sahte doküman kataloğu üretir.
// Kullanım: node scripts/generate-catalog.mjs
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const COUNT = 1000;

const categories = [
  "Fatura",
  "Sözleşme",
  "Rapor",
  "Sunum",
  "Teklif",
  "Bordro",
  "Form",
  "Tutanak",
];

const titleSeeds = [
  "Aralık Ayı",
  "Q3 Operasyon",
  "Yıllık Mali",
  "İK Personel",
  "Tedarikçi",
  "Müşteri",
  "Satış Performans",
  "Bütçe Onay",
  "Stok Sayım",
  "Lojistik",
  "Pazarlama",
  "Hukuk",
  "Vergi",
  "Bakım",
  "Eğitim",
];

const owners = [
  "Ayşe Yılmaz",
  "Mehmet Demir",
  "Zeynep Kaya",
  "Can Aydın",
  "Elif Şahin",
  "Mert Çelik",
  "Selin Arslan",
  "Burak Doğan",
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const pad = (n) => String(n).padStart(2, "0");

const randomDate = () => {
  const year = 2023 + Math.floor(Math.random() * 3);
  const month = 1 + Math.floor(Math.random() * 12);
  const day = 1 + Math.floor(Math.random() * 28);
  return `${year}-${pad(month)}-${pad(day)}`;
};

const documents = Array.from({ length: COUNT }, (_, i) => {
  const category = pick(categories);
  const seed = pick(titleSeeds);
  return {
    id: `DOC-${String(i + 1).padStart(5, "0")}`,
    title: `${seed} ${category} #${i + 1}`,
    category,
    owner: pick(owners),
    date: randomDate(),
    sizeKb: 50 + Math.floor(Math.random() * 4950),
  };
});

const out = resolve(__dirname, "../src/data/catalog.json");
writeFileSync(out, JSON.stringify(documents, null, 2), "utf8");
console.log(`✓ ${COUNT} kayıt yazıldı: ${out}`);
