import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li>
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              key={id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
