import React from "react";
import Series from "./application/features/series/pages/Series";
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <h1>Nav bar</h1>
      <Series />
    </Provider>
  );
}

export default App;
