import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);

    if (savedState) {
      this.setState({ index: Number(savedState) });
    }

    // const index = Number(localStorage.getItem(LS_KEY));
    // this.setState({ index });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];

    return (
      <div>
        <Controls
          currentItem={index + 1}
          totalItems={totalItems}
          onChange={this.changeIndex}
        />

        <Progress currentItem={index + 1} totalItems={totalItems} />

        <Publication item={currentItem} />
      </div>
    );
  }
}