import React from "react";
import { useSelector } from "react-redux";
import { State } from "../state";

export const SomeComponent = () => {

  const amount = useSelector((state: State) => state.bank);
  return <div>Hello from another component, reading state. The current balance is... {amount}</div>;
};
