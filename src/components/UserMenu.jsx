import { useContext } from 'react';
import ctx from '../context/authContext';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  tag: {
    fontSize: 24,
    margin: `0 20px 0 0`,
  },
};

export const UserMenu = () => {
  const { user, logIn, logOut } = useContext(ctx);

  return (
    <div style={styles.container}>
      {user ? (
        <>
          <p style={styles.tag}>{user}</p>
          <button type="button" onClick={logOut}>
            Вийти
          </button>
        </>
      ) : (
        <button type="button" onClick={logIn}>
          Увійти
        </button>
      )}
    </div>
  );
};
