import {Profile} from './Profile';
import user from '../user.json';

export const App = () => {
  return (
    <div className='container'>
      {user.map((user, idx) => (
        <Profile key={idx} user={user} />
      ))}
    </div>
  );
};
