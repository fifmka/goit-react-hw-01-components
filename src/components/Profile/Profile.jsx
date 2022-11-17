import s from './Profile.module.css';
import PropTypes from 'prop-types';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div classNames={s.description}>
        <img className={s.avatar} src={avatar} alt="User avatar" />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers </span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views </span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes </span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;

Profile.protoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  stats: PropTypes.object.isRequired,
};
