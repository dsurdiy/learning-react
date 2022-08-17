import { useState, useEffect, useRef } from 'react';

const styles = {
  clockface: {
    fontSize: 64,
    fontWeight: 500,
    textAlign: 'center',
  },
};

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Interval every 1000ms ' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <>
      <p style={styles.clockface}>Current time: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </>
  );
};
