import App from 'App';
import 'blueprint-react/dist/blueprint-react.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './state/store';

/*
import express from 'express';

let app = express();

app.get('/*', (req, res) => {
   res.send('hello world');
});


app.listen(3000, () => console.log('Running on localhost:3000'));
*/

window.addEventListener('load', () => {
    ReactDOM.render(
        <Provider store={store}>
            <React.StrictMode><App /></React.StrictMode>
        </Provider>,
        document.getElementById('root')
    );
});