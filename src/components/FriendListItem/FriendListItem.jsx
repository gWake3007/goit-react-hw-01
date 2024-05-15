import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const classNamesOnline = isOnline ? css.online : css.offline;
  return (
    <div className={css.friendCard} key={id}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width={48} />
      <p className={css.friendName}>{name}</p>
      <p className={classNamesOnline}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
