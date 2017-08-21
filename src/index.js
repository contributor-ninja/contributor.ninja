import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './Components/App';

if (typeof window !== 'undefined') injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
