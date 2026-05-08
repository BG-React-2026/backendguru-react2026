// Selamlayan bir metot
export function hello(): string {
  const saat = new Date().getHours();
  if (saat < 12) return "Günaydın";
  if (saat < 18) return "Iyi günler";
  if (saat < 21) return "Iyi akşamlar";
  return "Iyi geceler";
}
