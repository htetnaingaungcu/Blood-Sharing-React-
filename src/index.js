import React from 'react';
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import App from './App';
import  '../src/style.css';



// import * as bs from 'bootstrap/dist/css/bootstrap.min.css';



const rootElement = document.getElementById("root");
const store = createStore(rootReducer,applyMiddleware(thunk))  ;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);