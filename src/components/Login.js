import GoogleIcon from "@mui/icons-material/Google";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import logo from "../assets/logo.png";
import rectangle1 from "../assets/Rectangle1.png";
import rectangle2 from "../assets/Rectangle2.png";
import rectangle3 from "../assets/Rectangle3.png";
import window from "../assets/window.png";

const Login = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={12} md={6} sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "50%",
                margin: "0 auto",
              }}
            >
              <Typography variant="h4" component={"h2"} color="initial">
                Sign In
              </Typography>
              <Typography color="gray">Enter your credentials to access your account</Typography>
              <form
                style={{
                  margin: "3rem 0",
                  display: "flex",
                  gap: "2rem",
                  flexDirection: "column",
                }}
              >
                <TextField id="outlined-basic" fullWidth label="Email" variant="outlined" />
                <TextField id="outlined-basic" fullWidth label="Password" variant="outlined" />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked size="small" />}
                      label="Remember me"
                    />
                  </FormGroup>
                  <Typography>
                    <Link href="/" underline="none">
                      Forgot Password?
                    </Link>
                  </Typography>
                </Box>
                <Button variant="contained" sx={{ p: 1 }}>
                  Sign In
                </Button>
              </form>
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  gap: "3px",
                  p: 1,
                  width: "100%",
                  my: "1.5rem",
                }}
              >
                <GoogleIcon /> Sign In with google
              </Button>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Don't have an account?
                <Link href="/" underline="none">
                  Sign Up
                </Link>{" "}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={6} sx={{ background: "#0022D2", minHeight: "100vh" }}>
          <Box
            sx={{
              height: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              pr: "3rem",
            }}
          >
            <img src={rectangle1} alt="" style={{ position: "absolute", top: 0, left: "-6rem" }} />
            <img src={rectangle2} alt="" style={{ position: "absolute", top: 0, left: "-6rem" }} />
            <img
              src={window}
              alt=""
              style={{ position: "absolute", bottom: 0, right: 0, height: "40%" }}
            />
            <img
              src={rectangle3}
              alt=""
              style={{ position: "absolute", top: "28rem", left: "-6rem" }}
            />
            <img
              src={logo}
              alt=""
              style={{ position: "absolute", top: "3rem", right: "3rem", width: "20%" }}
            />
            <Box
              sx={{
                color: "white",
                textAlign: "right",
                // position: "absolute",
                // top: "50%",
                // right: "3rem",
              }}
            >
              <Box>
                <Typography variant="h4" color="initial" component="h1" color="white">
                  Automate your message service
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Typography sx={{ textAlign: "right", width: "70%" }}>
                    Make your tasks easy with Loopmee by an automated integration along with your
                    contacts
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
