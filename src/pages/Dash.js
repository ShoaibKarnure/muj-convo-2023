import React, { useState, useEffect } from "react";
import DashStudent from "../components/DashStudent";
import DepDash from "../components/DepDash";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
const Dash = () => {
  const [singleUser, setSingleUser] = useState([]);
  const { token, setToken, isuserloggedin, setIsuserloggedin, role } =
    useAuth();
  async function getUsers() {
    try {
      const response = await axios.get(
        "https://us-central1-muj-convocation-2023.cloudfunctions.net/app/auth/getUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSingleUser(response.data.data);
      console.log(response);
    } catch (e) {
      console.log(e);
      setIsuserloggedin(false);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  console.log(role);
  if (role == "student") {
    return (
      <DashStudent singleUser={singleUser} setSingleUser={setSingleUser} />
    );
  } else {
    console.log("department");
    return <DepDash singleUser={singleUser} setSingleUser={setSingleUser} />;
  }
};

export default Dash;
