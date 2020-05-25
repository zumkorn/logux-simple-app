import { createLoguxCreator } from '@logux/redux';
import { log } from '@logux/client';

import reducer from "../reducers";

const createStore = createLoguxCreator({
  subprotocol: '1.0.0',
  server: process.env.NODE_ENV === 'development'
    ? 'ws://localhost:31337'
    : 'wss://logux.example.com',
  userId: 'anonymous',
  token: ''
})
const store = createStore(reducer)

store.client.start();
log(store.client)

export default store;