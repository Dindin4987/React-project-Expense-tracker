import "./App.css";
import Home from "./components/Home";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainTransactions from "./pages/MainTransactions";
import TransactionsHistory from "./pages/TransactionsHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<MainTransactions />} />
          <Route path="transhistory" element={<TransactionsHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
