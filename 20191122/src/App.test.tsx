import React from 'react';
import ReactDOM from 'react-dom';
import App_p1 from './App_p1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App_p1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
