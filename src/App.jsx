import "./App.css";
import Home from "./components/Home";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Layout2 from "./components/Layout2";
import LeftSideUser from "./components/LeftSideUser";
import Donut from "./components/Donut";
import ExpenseList from "./components/ExpenseList";
import IncomeList from "./components/IncomeList";
import AddTransaction from "./components/AddTransaction";
import TransPage from "./components/TransPage";
import ExpenseIncomeBtn from "./components/ExpenseIncomeBtn";
import AllTransactions from "./components/AllTransactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="dashboard" element={<Layout2 />} />
          <Route path="user" element={<LeftSideUser />} />
          <Route path="donut" element={<Donut />} />
          <Route path="expenselist" element={<ExpenseList />} />
          <Route path="incomelist" element={<IncomeList />} />
          <Route path="addtran" element={<AddTransaction />} />
          <Route path="trans" element={<TransPage />} />
          <Route path="btn" element={<ExpenseIncomeBtn />} />
          <Route path="all" element={<AllTransactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
