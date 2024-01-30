// import React, { useContext } from "react";
// import { Button, TextField } from "@material-ui/core";
// import { multiStepContext } from "../StepContext";

// function SecondStep() {
//   const { setStep, userData, setUserData } = useContext(multiStepContext);
//   return (
//     <div>
//       <h3>Personal Details</h3>
//       <p> Email</p>
//       <TextField
//         type="text"
//         value={userData["firstname"]}
//         onChange={(e) =>
//           setUserData({ ...userData, firstname: e.target.value })
//         }
//         placeholder="email"
//       />
//       <p>country codeh</p>
//       <TextField type="number" placeholder="country" />
//       <br />
//       <Button variant="contained" onClick={() => setStep(1)} color="secondary">
//         Prevoius
//       </Button>
//       <Button variant="contained" onClick={() => setStep(3)} color="primary">
//         Next
//       </Button>
//     </div>
//   );
// }

// export default SecondStep;
