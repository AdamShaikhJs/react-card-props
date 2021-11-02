import { Paper } from "@mui/material";
import React from "react";
import AreaCard from "./Card";
const Tours = ({ data, removeTour }) => {
  return (
    <>
      <Paper sx={{ m: 4, p: 2 }}>
        <div style={{ margin: "auto", width: "50%" }}>
          {data.map((val, i) => {
            return <AreaCard key={val.id} {...val} removeTour={removeTour} />;
          })}
        </div>
      </Paper>
    </>
  );
};

export default Tours;
