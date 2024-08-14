import React from "react";
import Frontview from "./Pages/Frontview";
import LoginPage from "./Pages/LoginPage";
import Submit from "./Pages/Submit";
import Table from "./Pages/Table";
import Detail from "./Pages/Detail";
import InvestorProfile from "./Pages/InvestorProfile";
import VendorManagment from "./Pages/VendorManagment";
import LoadingPage from "./Pages/LoadingPage";

const App = () => {
  return (
    <div className=" w-[100vw] h-auto flex flex-col gap-1">
      <Frontview />
      <LoginPage />
      <Submit />
      <Table />
      <Detail />
      <InvestorProfile />
      <VendorManagment />
      <LoadingPage />
    </div>
  );
};

export default App;
