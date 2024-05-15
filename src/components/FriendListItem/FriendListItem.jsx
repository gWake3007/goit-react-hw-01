import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div className={css.friendCard} key={id}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width={48} />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? "online" : "offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
