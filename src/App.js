import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Deposit from "./pages/Deposit";
import Ours from "./pages/Ours";
import Fees from "./pages/Fees";
import Merchant from "./pages/Merchant";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="Deposit" element={<Deposit />}></Route>
      <Route path="Fees" element={<Fees />}></Route>
      <Route path="Merchant" element={<Merchant />}></Route>
      <Route path="ours" element={<Ours />} />
    </Routes>
  );
}
