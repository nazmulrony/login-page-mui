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

const Login = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={12} md={6} sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography variant="h4" component={"h2"} color="initial">
              Sign In
            </Typography>
            <Typography color="gray">Enter your credentials to access your account</Typography>
            <Box
              sx={{
                width: "50%",
                margin: "3rem auto",
              }}
            >
              <form
                style={{
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
                    <Link href="/">Forgot Password?</Link>
                  </Typography>
                </Box>
                <Button variant="contained">Sign In</Button>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={6} sx={{ background: "#0022D2" }}>
          <Box>dsgdsgs</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
