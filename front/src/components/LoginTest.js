import React from "react";
import { nanoid } from "nanoid";
import store from "../store/store";

async function onAuth(clientId, token) {
  store.client.changeUser(clientId, token);
  await store.client.node.waitFor("synchronized");
}

const LoginTest = () => {
  const onClick = () => {
    onAuth("admin", nanoid());
  }
  return <>
    <div>
      <button onClick={onClick}>Sign in as Admin</button>
    </div>
  </>
}

export default LoginTest;