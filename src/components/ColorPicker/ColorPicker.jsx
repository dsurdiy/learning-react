import { useState, memo } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';

function ColorPicker({ options }) {
  const [activeOptIdx, setActiveOptIdx] = useState(0);

  const setActiveIdx = index => setActiveOptIdx(index);

  const makeOptionClassName = index =>
    classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === activeOptIdx,
    });

  const { label } = options[activeOptIdx];

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{
              backgroundColor: color,
            }}
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default memo(ColorPicker);
