import "./App.css";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainTransactions from "./pages/MainTransactions";
import TransactionsHistory from "./pages/TransactionsHistory";
import { useAuth } from "./redux/useAuth";
import { refreshUser } from "./redux/authOperations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ExpenseList from "./components/ExpenseList";
import Layout2 from "./components/Layout2";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<MainTransactions />} />
          <Route path="transhistory" element={<TransactionsHistory />} />
          <Route path="expense" element={<ExpenseList />} />
          <Route path="header" element={<Layout2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
