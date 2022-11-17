import user from 'Json/user.json';
import Profile from 'components/Profile/Profile';
import data from 'Json/data.json';
import Statistics from 'components/Statistics/Statistics';
import friends from 'Json/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from 'Json/transactions.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
