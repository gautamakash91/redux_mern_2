import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";

export default class Register extends React.Component {

  render() {
    const {
      register,
      setEmail,
      setPassword,
      registerUser
    } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={12} md={4}>
          <Card style={{ marginTop: 200 }}>
            <CardContent>
              <Grid>
                <Typography variant="h5">
                  REGISTER USER
                </Typography>
                <TextField
                  variant="outlined"
                  label="email"
                  onChange={(e) => { setEmail(e.target.value) }}
                  margin="dense"
                  fullWidth
                  value={register.email}
                />

                <TextField
                  variant="outlined"
                  label="password"
                  onChange={(e) => { setPassword(e.target.value) }}
                  margin="dense"
                  fullWidth
                  value={register.password}
                />

                <Button
                  color="secondary"
                  fullWidth
                  variant="contained"
                  onClick={() => { registerUser(register.email, register.password) }}
                >
                  REGISTER
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}