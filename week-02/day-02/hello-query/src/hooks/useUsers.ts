import { useQuery } from '@tanstack/react-query';

// 1. Fetcher fonksiyonu
const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
};

// 2. Hook
export const useUsers = () => {
  return useQuery({
    // 1. React Query Cache tablosunda saklanacak değişken adı
    queryKey: ['kullanıcılar'],
    // 2. Data çeken fonk
    queryFn: fetchUsers,
    // 3. Cache'te tutulacak süre, API'ye istek atmasın diye
    staleTime: 3 * 60 * 1000,
  });
};

// 3. Type
export type User = {
  id: number;
  name: string;
};
