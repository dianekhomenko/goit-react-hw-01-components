import PropTypes from 'prop-types';
import css from 'components/Friends/FriendItem/FriendItem.module.css';
import { MdCircle } from 'react-icons/md';
import {Status} from 'components/Friends/FriendItem/FriendItem.styled.js';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <Status online={isOnline === true}>
          <MdCircle />
      </Status>

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
