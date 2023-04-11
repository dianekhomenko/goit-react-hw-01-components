import { Profile } from './Profile';
import user from 'data/user.json';
import { Statistics } from 'components/Statistics';
import statisticsData from 'data/data.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />

      <Statistics title="Upload stats" stats={statisticsData} />
    </>

    // <Statistics />
  );
};
