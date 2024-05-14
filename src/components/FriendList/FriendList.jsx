// import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import friends from "../../friends.json";

const FriendList = () => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li>
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
