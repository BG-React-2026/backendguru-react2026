import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import { songs } from './data/songs';

// rafce
const App = () => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <ListHeader />
      {songs.map((song) => (
        // Object desctuctring
        <ListItem key={song.title} {...song} />
      ))}
    </ul>
  );
};

export default App;
