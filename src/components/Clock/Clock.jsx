import { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Інтервал кожні 2000ms ' + Date.now());
      setTime(new Date());
    }, 2000);

    return () => {
      console.log('Це функція очистки перед наступним викликом useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>Час: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Зупинити
      </button>
    </div>
  );
}
