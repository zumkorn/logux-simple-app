import { createLoguxCreator } from '@logux/redux';
import { log } from '@logux/client';

import reducer from "../reducers";

const userId = localStorage.getItem("userId");
const token = localStorage.getItem("token");

const createStore = createLoguxCreator({
  subprotocol: '1.0.0',
  server: process.env.NODE_ENV === 'development'
    ? 'ws://localhost:31337'
    : 'wss://logux.example.com',
  userId: userId ? userId : 'anonymous',
  token: token ? token : ''
})
const store = createStore(reducer)

store.client.on("state", (e)=> {
  //rconsole.log(store.client.clientId);
})

store.client.start();
log(store.client)

export default store;