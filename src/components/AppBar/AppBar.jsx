import styles from './Appbar.module.css';
import { Navigation } from '../Navigation/Navigation';

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};
