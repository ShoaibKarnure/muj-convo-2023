import React, { useState, useEffect } from "react";
import "../style/dashboard.css";
import vector from "../assets/Vector.svg";
import Details from "./Details";
import CommForm from "./CommForm";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import Feedback from "../pages/Feedback";
import SavedDetails from "./SavedDetails";

const DashStudent = () => {
  const [singleUser, setSingleUser] = useState([]);
  const { token, setToken, isuserloggedin, setIsuserloggedin } = useAuth();
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
  return (
    <>
      <div className='layer'>
        <div className='super'>
          <div className='mainy'>
            {!singleUser.feedbackGiven ? (
              <Feedback />
            ) : (
              <>
                <Details
                  singleUser={singleUser}
                  setSingleUser={setSingleUser}
                />
                {singleUser.phone ? (
                  <SavedDetails
                    singleUser={singleUser}
                    setSingleUser={setSingleUser}
                  />
                ) : (
                  <CommForm
                    singleUser={singleUser}
                    setSingleUser={setSingleUser}
                  />
                )}
              </>
            )}
          </div>
        </div>
        <img src={vector} alt='' className='vector' />
      </div>
    </>
  );
};

export default DashStudent;
