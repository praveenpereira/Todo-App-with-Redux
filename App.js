import React from 'react';
import Todo from './components/Todo';
import {Provider} from 'react-redux';
import store from './store/index';

const App=()=>{
  return(
    <Provider store = {store}>
    <Todo />
    </Provider>
  )
}
export default App;