import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './reducers/index';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {addCharacterById} from './actions/index';

const store =createStore(rootReducer);
// get current state
console.log("store.getState()",store.getState());

// every time there is change in state subscribe will be called.
store.subscribe(()=>console.log('store data',store.getState()));
store.dispatch(addCharacterById(2));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
