import css from 'components/Friends/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};