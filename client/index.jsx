import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.jsx';
import StyledLayout from './components/layout.jsx';

let randomLookId = Math.floor(Math.random() * 1000000 + 1)

ReactDOM.render(<App looksId = {randomLookId}/>, document.getElementById('RelatedRoot'));
// ReactDOM.render(<StyledLayout/>, document.getElementById('layout'));
