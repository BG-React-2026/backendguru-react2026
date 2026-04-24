import { useEffect, useState } from 'react';
import type { User } from './models/User';

const App = () => {
  const [id, setId] = useState(1);
  const [user, setUser] = useState<User>();
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setUser(json))
      .catch((e) => console.log(e));
  }, [API_URL]);

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
