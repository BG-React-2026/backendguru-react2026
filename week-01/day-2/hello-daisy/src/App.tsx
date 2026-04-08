// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [students, setStudents] = useState([{ id: 1, name: "Baran" }]);
  const [name, setName] = useState("");

  const handleAdd = () => {
    const newArray = [...students, { name: name, id: Math.random() }];
    setStudents(newArray);
  };

  const handleDelete = (id: number) => {
    const newArray = students.filter((s) => s.id !== id);
    setStudents(newArray);
  };

  return (
    <div>
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAdd}>
        Ekle
      </button>
      {/* Object destructring */}
      {students.map(({ id, name }) => (
        <li key={id}>
          {name}
          <button className="btn" onClick={() => handleDelete(id)}>
            Sil
          </button>
        </li>
      ))}
    </div>
  );
};

export default App;
