import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

function FirstStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div>
      <h3>Personal Details</h3>
      <form>
        <div className="mouni">
          <label className="required">Name</label>
          <input
            type="text"
            placeholder="Entername"
            value={userData["name"]}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            pattern="[A-Za-z]{3}"
            title="please enter atleast three characters"
          />
          <label className="required">Date Of Birth or Age</label>
          <input
            type="text"
            value={userData["Date"]}
            onChange={(e) => setUserData({ ...userData, Date: e.target.value })}
            placeholder="DD/MM/YYYY or age in years"
            pattern="\d{1,100}"
            maxLength="2"
            title="please enter possitive age"
          />
          <label className="required">Sex</label>
          <select
            value={userData["sex"]}
            onChange={(e) => setUserData({ ...userData, sex: e.target.value })}
          >
            <option>Enter sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <br />
        <div className="vini">
          <label>Mobile</label>
          <input
            type="text"
            value={userData["mobile"]}
            onChange={(e) =>
              setUserData({ ...userData, mobile: e.target.value })
            }
            placeholder="enter mobile number"
          />
          <label>Govt Issue Id</label>
          <select
            value={userData["govtissue"]}
            onChange={(e) =>
              setUserData({ ...userData, govtissue: e.target.value })
            }
          >
            <option>ID Type</option>
            <option
              value="Aadhar card"
              data-type="adhaar-number"
              pattern="\d[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}"
              maxLength="13"
            >
              Aadhar card
            </option>
            <option
              value="pan card"
              maxLength={10}
              pattern="\d{1,10}"
              maxlength="10"
            >
              Pan card
            </option>
            <option value="Voter id">Voter id</option>
            <option value="Driving Licience">Driving Licience</option>
          </select>
          <input type="text" placeholder="Enter Govt Id" />
        </div>

        <Button
          variant="contained"
          onClick={() => setStep(2)}
          color="primary"
          className="pinky"
        >
          Next
        </Button>
      </form>
    </div>
  );
}

export default FirstStep;
