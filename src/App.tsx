import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

import { SomeComponent } from "./components/SomeComponent";
import { AddComponent } from "./components/AddComponent";

function App() {
  const dispatch = useDispatch(); // so we can use our action creators.

  // Get our action creators.
  const { bankrupt, depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
      <SomeComponent />
      <AddComponent />
    </div>
  );
}

export default App;
