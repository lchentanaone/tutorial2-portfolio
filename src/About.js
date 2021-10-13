import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const TextTypography = withStyles({
  root: {
    color: "white",
  },
})(Typography);

function About() {
  return (
    <Grid container>
      <div className="About">
        <TextTypography variant="h6">
          <h1>Personal Data</h1>
          Name: Elchen Tanauan <br />
          Birthday: June 15, 2000 <br />
          Age: 21 <br />
          Current Address: Brgy. Sto. Niño, Tugbog District, Davao City,
          Philippines <br />
          Civil Status: Single
        </TextTypography>
      </div>
    </Grid>
  );
}
export default About;
