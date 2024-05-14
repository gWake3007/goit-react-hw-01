import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, followers, views, likes }) => {
  return (
    <div className={css.profile}>
      <div className={css.card}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats_list}>
        <li className={css.stats}>
          <span>Followers</span>
          <span className={css.stat_number}>{followers}</span>
        </li>
        <li className={css.stats}>
          <span>Views</span>
          <span className={css.stat_number}>{views}</span>
        </li>
        <li className={css.stats}>
          <span>Likes</span>
          <span className={css.stat_number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
