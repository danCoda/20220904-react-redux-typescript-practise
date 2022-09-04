import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const AddComponent = () => {
  const dispatch = useDispatch();

  const { depositMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      AddComponent
      <button onClick={() => depositMoney(100)}>Deposit 100</button>
    </div>
  );
};
