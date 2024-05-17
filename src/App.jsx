import "./App.css";
import user from "./userData.json";
import transactions from "./transactions.json";
import friends from "./friends.json";
import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";

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
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
