import React from "react";
import DashStudent from "../components/DashStudent";
import DepDash from "../components/DepDash";
import { useAuth } from "../context/AuthContext";
const Dash = () => {
  const { role } = useAuth();
  console.log(role);
  if (role == "student") {
    return <DashStudent />;
  } else {
    console.log("department");
    return <DepDash />;
  }
};

export default Dash;
