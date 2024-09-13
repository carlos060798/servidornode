import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hook/useForm";
import { useDispatch } from "react-redux";
import {
  checkingAthentication,
  startgoogleSinging,
} from "../../store/auth/thunks";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const LoginPage = () => {
 //  se obtiene el estado de la autenticación
 const { status } = useSelector(state => state.auth); 
 

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "example@example.com",
    password: "123456",
  });

   // se memoriza el estado de la autenticación para evitar que los botones se activen o desactiven
   const isAutenticated= useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submiting", {
      email,
      password,
    });
    dispatch(checkingAthentication(email, password));
  };

  const onGoogleSinging = () => {
    console.log(" Google Singing");
    dispatch(startgoogleSinging());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password} 
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={isAutenticated}
              type="submit" variant="contained" fullWidth
                
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button  disabled={isAutenticated} 
              variant="contained" fullWidth onClick={onGoogleSinging}
              
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
