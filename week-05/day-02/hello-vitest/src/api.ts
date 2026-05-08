export type User = {
  id: number;
  name: string;
};

// Kullanıcı listesi döner
export async function getUsers(): Promise<User[]> {
  const res = await fetch("/users");
  return res.json();
}
