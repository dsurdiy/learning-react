import { PureComponent } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';

class ColorPicker extends PureComponent {
  state = {
    activeOptionIdx: 3,
  };

  makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });

    // const optionClasses = ['ColorPicker__option'];

    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push('ColorPicker__option--active');
    // }

    // return optionClasses.join(' ');
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
