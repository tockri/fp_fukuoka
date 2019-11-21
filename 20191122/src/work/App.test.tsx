import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// create-react-appが作ったテスト以外作りようがない。
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
