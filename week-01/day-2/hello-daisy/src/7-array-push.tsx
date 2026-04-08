// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [students, setStudents] = useState([{ id: 1, name: "Baran" }]);
  const [name, setName] = useState("");

  const handleAdd = () => {
    // Bu yapmıyoruz (Render tetiklemez)
    students.push({
      id: 123,
      name: name,
    });
  };

  console.log(students);

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
        <li key={id}>{name}</li>
      ))}
    </div>
  );
};

export default App;
