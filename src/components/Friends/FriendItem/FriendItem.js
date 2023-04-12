import PropTypes from 'prop-types';
import css from 'components/Friends/FriendItem/FriendItem.module.css';
import { MdCircle } from 'react-icons/md';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.online}>
          <MdCircle />
        </span>
      ) : (
        <span className={css.offline}>
          <MdCircle />
        </span>
      )}
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
