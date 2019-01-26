import React from 'react';
import { shallow } from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Can starts a new game', () => {
    const wrapper = shallow(<Game />);

    wrapper.setState({
      guesses: [3, 2, 5, 4],
      feedback: 'Awesome',
      correctAnswer: 1 
    });
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  });

  it('Can make guesses', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 100
    });

    wrapper.instance().makeGuess(25);
    expect(wrapper.state('guesses')).toEqual([25]);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
    });

});