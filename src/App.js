import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ChooseOption from "./components/ChooseOption/ChooseOption";
import DashboardApplication from "./components/DashboardApplication/DashboardApplication";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="dashboard/applications" element={< DashboardApplication />} />
          <Route path="dashboard/selectCloud" element={< ChooseOption />} />
          <Route path="dashboard/selectCloud/payment_field" element={< Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
