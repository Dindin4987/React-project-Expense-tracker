import "./App.css";
import SharedLayout from "./components/SharedLayout";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing User... Please wait.</h1>
  ) : (
    <>
      <Routes path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/dashboard" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/dashboard" />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute component={MainTransactions} redirectTo="/login" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
