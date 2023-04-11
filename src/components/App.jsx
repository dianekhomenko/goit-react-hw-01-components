import { Profile } from './Profile';
import user from '../user.json';
import { Statistics } from './Statistics';
import statisticsData from '../data.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />

      <Statistics title="Upload stats" stats={statisticsData} />
    </>

    // <Statistics />
  );
};
