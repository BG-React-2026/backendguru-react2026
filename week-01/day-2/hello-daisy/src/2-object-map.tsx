// rafce
const App = () => {
  const students = [
    {
      id: "1",
      name: "Kaan",
    },
    {
      id: "2",
      name: "Melike",
    },
    {
      id: "3",
      name: "Gökhan",
    },
  ];
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
};

export default App;
