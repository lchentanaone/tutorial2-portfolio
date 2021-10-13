import React from "react";
import HomePage from "./HomePage";
import About from "./About";
import Validation from "./Validation";
import pic1 from "./lchen.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EducationPage from "./EducationPage";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "transparent",
    width: "180px",
    height: "705px",
    marginLeft: "13px",
  },
}));
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Scheherazade New", "serif"].join("."),
  },
});

const WhiteTextTypography = withStyles({
  root: {
    color: "white",
  },
})(Typography);

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div id="App">
        <Router>
          <Grid container spacing={3}>
            <div className="Sidebar">
              <Grid
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                item
                xs={3}
              >
                <Box mt={4} ml={4}>
                  <img src={pic1} alt="" width="180px" margin-left="500px" bo />
                  <WhiteTextTypography>Elchen Tanauan</WhiteTextTypography>
                </Box>

                <Box mt={2} ml={8}>
                  <Link to="/homepage">Home</Link>
                </Box>
                <br />
                <Box mt={0} ml={8}>
                  <Link to="/about">About</Link>
                </Box>
                <br />
                <Box mt={0} ml={8}>
                  <Link to="/educationPage">Education</Link>
                </Box>
              </Grid>
            </div>
            <Grid
              justifyContent="flex-end"
              alignItems="flex-start"
              item
              xs={10}
            >
              <Switch>
                <Route exact path="/HomePage">
                  <HomePage />
                </Route>
                <Route exact path="/About">
                  <About />
                </Route>
                <Route exact path="/EducationPage">
                  <EducationPage />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
