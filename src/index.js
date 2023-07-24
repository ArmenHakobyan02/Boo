import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ScrilTop } from './Components/ScrolTop/ScrolTop';
import { Provider } from 'react-redux';
import { store } from './Components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrilTop />
            <App />
        </BrowserRouter>
    </Provider>
);

