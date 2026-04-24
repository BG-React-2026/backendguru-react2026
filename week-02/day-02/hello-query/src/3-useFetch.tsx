import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

const App = () => {
  const [id, setId] = useState(1);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const user = useFetch(url);

  return (
    <div>
      <button className="btn" onClick={() => setId(id - 1)}>
        Onceki
      </button>
      <button className="btn" onClick={() => setId(id + 1)}>
        Sonraki
      </button>
      {/* @ts-ignore */}
      {user ? user?.name : 'Loading...'}
    </div>
  );
};

export default App;
