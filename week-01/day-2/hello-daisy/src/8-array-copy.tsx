// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [students, setStudents] = useState([{ id: 1, name: "Baran" }]);
  const [name, setName] = useState("");

  const handleAdd = () => {
    const student = { name: name, id: Math.random() };
    const newArray = [student, ...students];
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
        <li key={id}>{name}</li>
      ))}
    </div>
  );
};

export default App;
