import React from "react";
import { nanoid } from "nanoid";
import store from "../store/store";

async function onAuth(clientId, token) {
  localStorage.setItem("userId", clientId);
  localStorage.setItem("token", token);
  store.client.changeUser(clientId, token);
  await store.client.node.waitFor("synchronized");
}
const someAction = () => {
  store.dispatch.sync({type: "some_action"})
}

const LoginTest = () => {
  const login = () => {
    onAuth("admin", nanoid());
  }
  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    onAuth("anonymous", '');
  }
  return <>
    <div>
      <button onClick={login}>Sign in as Admin</button>
      <button onClick={logout}>Exit</button>
      <br/>
      <button onClick={someAction}>Some action</button>
    </div>
  </>
}

export default LoginTest;