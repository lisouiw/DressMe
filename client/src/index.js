import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { App } from './Route.js';
// import { Provider } from 'react-redux'

// import { createStore } from 'redux'
// import rootReducer from './reducers'


// const store = createStore(rootReducer)

ReactDOM.render(
    // <Provider store={store} >
        <App />
    // </Provider>
    , document.getElementById('root'));

export default App;
