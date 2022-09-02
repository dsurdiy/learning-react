import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/userSlice';

export const UserMenu = () => {
  const login = useSelector(state => state.user.login);
  const dispatch = useDispatch();

  return (
    <div>
      {login}
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
