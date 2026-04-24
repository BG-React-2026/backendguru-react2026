import { useEffect, useState } from 'react';

const App = () => {
  const [sayac, setSayac] = useState(1);
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setSayac(sayac + 1)}
      >
        Arttır
      </button>
      <User id={sayac} />
    </div>
  );
};

const User = ({ id = 1 }) => {
  // usss
  const [user, setUser] = useState();
  const API_URL =
    'https://jsonplaceholder.typicode.com/users/';

  // uffs
  useEffect(() => {
    fetch(API_URL + id)
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, [id]);

  if (!user) return <h1>Loading...</h1>;

  return (
    <ul>
      <li>ID: {id}</li>
      <li>Name: {user.name}</li>
    </ul>
  );
};

export default App;
