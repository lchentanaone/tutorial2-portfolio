import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const TextTypography = withStyles({
  root: {
    color: "white",
  },
})(Typography);

function EducationPage() {
  return (
    <Grid container>
      <div className="Educ">
        <TextTypography variant="h6">
          <h1>Educational Backgound</h1>
          Elementary: Maragusan Central Elementary School <br />
          <br />
          High School: Los Amigos National High School Davao City <br />
          <br />
          Senior Highscchool: 488 Gen. Douglas MacArthur Hwy, Balusong Matina,
          Davao City, 8000 Davao del Sur
          <br />
        </TextTypography>
      </div>
    </Grid>
  );
}

export default EducationPage;
