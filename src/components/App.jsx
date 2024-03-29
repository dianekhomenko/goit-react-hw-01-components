import { Profile } from 'components/Profile/Profile';
import user from 'data/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import statisticsData from 'data/data.json';
import friends from 'data/friends.json';
import { FriendList } from './Friends/FriendList/FriendList';
import transactions from 'data/transactions.json'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
