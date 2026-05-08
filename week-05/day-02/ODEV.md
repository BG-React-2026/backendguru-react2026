# Hafta 5 - Gün 2 Ödevi: Vitest ile Test Yazma

Bu ödevde gün içerisinde işlediğimiz tüm test konularını uygulamalı olarak pekiştireceğiz: **AAA pattern**, **lifecycle hook'lar**, **fake timers**, **mock fonksiyonlar** ve **React component testleri**.

## Hedefler

- Vitest ile birim testi yazabilmek
- `describe`, `it`, `expect` yapısını doğru kullanmak
- `beforeAll`, `beforeEach`, `afterEach`, `afterAll` hook'larını yerinde kullanmak
- `vi.useFakeTimers` ve `vi.setSystemTime` ile zamana bağımlı kod test etmek
- `vi.fn` ve `vi.mock` ile bağımlılıkları izole etmek
- `@testing-library/react` ve `userEvent` ile component testleri yazmak

## Kurulum

Yeni bir Vite + React + TypeScript projesi oluşturun ve `hello-vitest` projesindeki yapılandırmayı (Vitest + jsdom + setup dosyası) kopyalayın.

```bash
npm create vite@latest odev-test -- --template react-ts
cd odev-test
npm install
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest
```

`vite.config.ts` ve `src/test/setup.ts` dosyalarını derste yaptığımız şekilde ayarlayın.

---

## Görev 1: Sepet Modülü (Birim Test)

`src/sepet.ts` dosyasında bir alışveriş sepeti modülü oluşturun.

### Tipler ve Fonksiyonlar

```ts
export type Urun = {
  id: number;
  ad: string;
  fiyat: number;
  adet: number;
};

export function urunEkle(sepet: Urun[], urun: Urun): Urun[];
export function urunSil(sepet: Urun[], id: number): Urun[];
export function toplamHesapla(sepet: Urun[]): number;
export function indirimUygula(toplam: number, kuponKodu: string): number;
```

### Beklenen Davranışlar

- `urunEkle`: Eğer ürün zaten sepette varsa adetini bir arttırır, yoksa ekler.
- `urunSil`: Verilen `id`'ye sahip ürünü sepetten çıkarır.
- `toplamHesapla`: Tüm ürünlerin `fiyat * adet` toplamını döner.
- `indirimUygula`:
  - `"OGRENCI10"` → %10 indirim
  - `"YENIYIL25"` → %25 indirim
  - Geçersiz kupon → toplam değişmez

### Test Senaryoları (`src/sepet.test.ts`)

`describe("sepet")` altında **AAA pattern** ile şu testleri yazın:

- [ ] Boş sepete ürün eklendiğinde 1 ürün olur
- [ ] Aynı ürün tekrar eklenirse adet 2 olur, sepet uzunluğu değişmez
- [ ] Ürün silindiğinde sepetten çıkar
- [ ] Olmayan id silinmeye çalışıldığında sepet aynı kalır
- [ ] Toplam doğru hesaplanır (3 farklı ürünle)
- [ ] Boş sepetin toplamı 0'dır
- [ ] `OGRENCI10` kuponu %10 indirim uygular
- [ ] `YENIYIL25` kuponu %25 indirim uygular
- [ ] Geçersiz kupon toplamı değiştirmez

> **İpucu:** Her test bağımsız olmalı. Ortak veriyi `beforeEach` içinde hazırlayın.

---

## Görev 2: Selam Mesajı V2 (Fake Timers)

`src/selam.ts` dosyasına aşağıdaki fonksiyonu yazın:

```ts
export function selamla(isim: string): string;
```

### Beklenen Davranış

Saat ve haftanın gününe göre dinamik selam:

- Hafta içi (Pzt–Cum) sabah (06–12): `"Günaydın {isim}, iyi çalışmalar!"`
- Hafta sonu (Cmt–Pzr) sabah (06–12): `"Günaydın {isim}, keyifli bir gün geçir!"`
- 12–18 arası: `"İyi günler {isim}"`
- 18–22 arası: `"İyi akşamlar {isim}"`
- Diğer saatler: `"İyi geceler {isim}"`

### Test Senaryoları (`src/selam.test.ts`)

- [ ] Pazartesi 09:00'da "Günaydın ... iyi çalışmalar" döner
- [ ] Cumartesi 09:00'da "Günaydın ... keyifli bir gün" döner
- [ ] Salı 14:00'te "İyi günler" döner
- [ ] Cuma 20:00'de "İyi akşamlar" döner
- [ ] Çarşamba 02:00'de "İyi geceler" döner

> **İpucu:** `beforeEach` içinde `vi.useFakeTimers()`, `afterEach` içinde `vi.useRealTimers()`. Her test başında `vi.setSystemTime(new Date("2026-..."))` ile tarihi sabitleyin.

---

## Görev 3: Hava Durumu API (Mock)

`src/hava.ts` dosyasına aşağıdaki fonksiyonu yazın:

```ts
export type HavaDurumu = {
  sehir: string;
  derece: number;
  durum: "guneşli" | "yagmurlu" | "karli" | "bulutlu";
};

export async function havaDurumuGetir(sehir: string): Promise<HavaDurumu>;
```

Fonksiyon `https://api.example.com/weather?city={sehir}` adresine istek atar. İstek başarısızsa (`res.ok === false`) `"Hava durumu alınamadı"` hatası fırlatır.

### Test Senaryoları (`src/hava.test.ts`)

- [ ] Istanbul için API çağrısı yapılır ve sonuç döner
- [ ] Doğru URL ile fetch çağrılır
- [ ] API hata dönerse fonksiyon hata fırlatır
- [ ] Network hatasında fonksiyon hata fırlatır

> **İpucu:** `global.fetch = vi.fn()` ile fetch'i mock'layın. `mockResolvedValueOnce({ ok: true, json: async () => ({...}) } as Response)` kullanın. Her test öncesi `vi.clearAllMocks()` çağırın.

---

## Görev 4: TodoList Component (RTL + userEvent)

`src/components/TodoList.tsx` dosyasına bir yapılacaklar listesi component'i yazın.

### Özellikler

- Input + "Ekle" butonu
- Eklenen item'lar `<ul>` içinde listelenir
- Her item'ın yanında "Sil" butonu vardır
- Her item'a tıklayınca üstü çizilir (tamamlandı işareti)
- Boş input ile ekleme yapılamaz

### Test Senaryoları (`src/components/TodoList.test.tsx`)

- [ ] Başlangıçta liste boştur
- [ ] Input'a yazıp "Ekle"'ye basınca item listede görünür
- [ ] Birden fazla item eklenebilir
- [ ] Boş input ile "Ekle"'ye basılırsa item eklenmez
- [ ] "Sil" butonuna basınca item listeden kalkar
- [ ] Item'a tıklayınca tamamlandı stili uygulanır (örn: `text-decoration: line-through`)

> **İpucu:** `const user = userEvent.setup()`, `await user.type(input, "...")`, `await user.click(button)`. Sorgular için `screen.getByRole("textbox")`, `screen.getByRole("button", { name: /ekle/i })`, `screen.queryByText(...)` kullanın.

---

## Bonus Görevler

- [ ] Sepet modülüne `sepetiBosalt` fonksiyonu ekleyip test edin
- [ ] TodoList'e localStorage entegrasyonu ekleyin ve `vi.spyOn(Storage.prototype, "setItem")` ile test edin
- [ ] Hava durumu fonksiyonunu `vi.mock("./hava")` ile module-level mock'layarak ayrı bir test dosyası yazın
- [ ] Test coverage'ı `npm test -- --coverage` ile ölçün, %90+ hedefleyin

---

## Değerlendirme Kriterleri

| Kriter                                                        | Puan    |
| ------------------------------------------------------------- | ------- |
| Görev 1 (Sepet) tamamlanmış ve tüm testler yeşil              | 25      |
| Görev 2 (Selam) fake timer'lar doğru kullanılmış              | 20      |
| Görev 3 (API) mock'lar temiz ve hata senaryoları kapsanmış    | 20      |
| Görev 4 (TodoList) userEvent ile gerçek davranış test edilmiş | 25      |
| AAA pattern, isimlendirme, hook kullanımı                     | 10      |
| **Toplam**                                                    | **100** |

## Teslim

- Projenizi GitHub'a push'layın
- Repo linkini paylaşın
- `npm test` komutu ile tüm testler geçmeli (yeşil olmalı)

İyi çalışmalar! 🚀
