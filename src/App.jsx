// import { Clock } from 'components/Clock';
// import { Counter } from 'components/Counter';
// import { SingUpForm } from 'components/SingUpForm';
// import ColorPicker from 'components/ColorPicker/ColorPicker';
// import { News } from 'components/News';
import { UserMenu } from 'components/UserMenu';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export const App = () => {
  return (
    <>
      {/* <Clock /> */}
      {/* <Counter /> */}
      {/* <SingUpForm /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      {/* <News /> */}
      <UserMenu />
    </>
  );
};
