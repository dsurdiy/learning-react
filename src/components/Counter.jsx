import { useState, useEffect } from 'react';

const styles = {
  btn: {
    display: 'inline-flex',
    fontSize: 20,
    margin: 4,
    cursor: 'pointer',
  },
};

export const Counter = () => {
  const [counterA, setCounterA] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevCounterA => prevCounterA + 1);
  };

  const [counterB, setCounterB] = useState(0);

  const handleCounterBIncrement = () => {
    setCounterB(prevCounterB => prevCounterB + 1);
  };

  useEffect(() => {
    document.title = `Клікнули ${counterA + counterB} разів`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        style={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>
      <button
        style={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
};
