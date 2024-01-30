import React, { useContext } from "react";
import {
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Table,
} from "@material-ui/core";
import { multiStepContext } from "../StepContext";

function DisplayData() {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table
          border="1"
          style={{ width: "70%", justifyContent: "center" }}
          size="small"
          aria-label="caption table"
        >
          <TableHead>
            <TableRow
              style={{ backgroundColor: "burlywood", color: "aliceblue" }}
            >
              <TableCell> Name</TableCell>
              <TableCell>Date of Birth or Age</TableCell>
              <TableCell>Sex</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Govt Issue Id</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>State</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Pincode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((data) => (
              <TableRow key={data.email}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.Date}</TableCell>
                <TableCell>{data.sex}</TableCell>
                <TableCell>{data.mobile}</TableCell>
                <TableCell>{data.govtissue}</TableCell>

                <TableCell>{data.Address}</TableCell>
                <TableCell>{data.State}</TableCell>
                <TableCell>{data.city}</TableCell>
                <TableCell>{data.country}</TableCell>
                <TableCell>{data.pincode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DisplayData;
