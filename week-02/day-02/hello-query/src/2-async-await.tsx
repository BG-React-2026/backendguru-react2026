import { useEffect, useState } from 'react';
import type { User } from './models/User';

const App = () => {
  const [id, setId] = useState(1);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const json = await res.json();
        setUser(json);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <button className="btn" onClick={() => setId(id - 1)}>
        Onceki
      </button>
      <button className="btn" onClick={() => setId(id + 1)}>
        Sonraki
      </button>
      {user?.name}
    </div>
  );
};

export default App;
