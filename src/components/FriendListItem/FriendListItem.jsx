import React from 'react';
import s from 'components/FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={`${s.status} ${isOnline ? s.isActive : ''}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;

FriendListItem.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
