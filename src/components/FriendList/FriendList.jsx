import React from 'react';
import s from 'components/FriendList/FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};
export default FriendList;

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
