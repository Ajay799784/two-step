import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

function ThirdStep() {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div>
      <h3>Address Details</h3>
      <form>
        <div className="mouni">
          <label className="required">Address</label>
          <input
            type="text"
            placeholder="Enter address"
            value={userData["Address"]}
            onChange={(e) =>
              setUserData({ ...userData, Address: e.target.value })
            }
          />
          <label className="required">State</label>
          <select
            value={userData["State"]}
            onChange={(e) =>
              setUserData({ ...userData, State: e.target.value })
            }
          >
            <option>Select state</option>
            <option value="A.p">A.P</option>
            <option value="A.R">A.R</option>
            <option value="A.S">A.S</option>
            <option value="B.R">B.R</option>
            <option value="C.G">C.G</option>
            <option value="G.A">G.A</option>
            <option value="H.R">H.R</option>
          </select>
          <label className="required">City</label>
          <select
            value={userData["City"]}
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          >
            <option>Enter City</option>
            <option value="Gudur">Gudur</option>
            <option value="Nellore">Nellore</option>
            <option value="tirupathi">tirupathi</option>
            <option value="Bamgalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="chennai">Chennai</option>
          </select>
        </div>
        <br />
        <div className="vini">
          <label for="country">Country</label>

          <select
            id="country"
            name="country"
            class="form-control"
            value={userData["country"]}
            onChange={(e) =>
              setUserData({ ...userData, country: e.target.value })
            }
          >
            <option>Select country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="India">India</option>
          </select>

          <label>Pincode</label>
          <input
            tyep="text"
            placeholder="enter pincode"
            pattern="{6}"
            maxLength="6"
            value={userData["Pincode"]}
            onChange={(e) =>
              setUserData({ ...userData, pincode: e.target.value })
            }
          />
        </div>
        <div className="raju">
          <Button
            variant="contained"
            onClick={() => setStep(1)}
            color="secondary"
          >
            Prevoius
          </Button>
          <Button variant="contained" onClick={submitData} color="primary">
            submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ThirdStep;
