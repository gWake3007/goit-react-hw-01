import "./App.css";
import user from "./userData.json";
import Profile from "./components/Profile/Profile.jsx";

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user[0];

const App = () => {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
    </>
  );
};

export default App;
