import { useUsers } from './hooks/useUsers';

const App = () => {
  // Renamimg: data => users oldu
  const { data: users } = useUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default App;
