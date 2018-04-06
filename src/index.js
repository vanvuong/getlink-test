import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import RouterConfig from './router';
render(
    <RouterConfig />,
    document.getElementById('root')
);
registerServiceWorker();
document.getElementById('initial-loading').remove();

