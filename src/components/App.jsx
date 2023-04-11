import {Profile} from './Profile';
import user from '../user.json';
import { Statistics } from './Statistics';
import statisticsData from '../data.json';

export const App = () => {
  return (
    <>
      {user.map((user, idx) => (
        <Profile key={idx} user={user} />
      ))}
      
      <Statistics title="Upload stats" stats={statisticsData} />
    </>

    // <Statistics />
  );
};