import "./App.css";
import Home from "./components/Home";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Layout2 from "./components/Layout2";
import LeftSideUser from "./components/LeftSideUser";
import Donut from "./components/Donut";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

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
          <Route path="expense" element={<ExpenseForm />} />
          <Route path="expenselist" element={<ExpenseList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
