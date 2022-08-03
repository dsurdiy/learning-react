export const Controls = ({ onForward, onBack, prevDisabled, nextDisabled }) => {
  return (
    <section>
      <button type="button" disabled={prevDisabled} onClick={onBack}>
        Назад
      </button>
      <button type="button" disabled={nextDisabled} onClick={onForward}>
        Вперед
      </button>
    </section>
  );
};
