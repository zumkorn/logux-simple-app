import React from 'react';
import { Provider } from 'react-redux'
import store from "./store/store";
import LoginTest from "./components/LoginTest";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginTest/>
      </div>
    </Provider>
  );
}

export default App;
