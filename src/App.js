import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import UserAccount from "./components/UserAccount";
import AllData from "./components/AllData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="myAccount" element={<UserAccount />} />
            <Route path="allData" element={<AllData />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
