import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import { spacing } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSound from "use-sound";
import picture from "../assets/wav-pool-sm.jpg";
import btnPicture from "../assets/seal.jpg";
import btnPicture2 from "../assets/looney.gif";
import btnPicture3 from "../assets/bird.jpg";
import btnPicture4 from "../assets/train.jpg";
import btnPicture5 from "../assets/toot.jpg";
import btnPicture6 from "../assets/bullfrog.jpg";
import btnPicture7 from "../assets/bob1.jpg";
import btnPicture8 from "../assets/bob2.jpg";
import btnPicture9 from "../assets/bob3.jpg";
import btnPicture10 from "../assets/horse1.jpg";
import btnPicture11 from "../assets/2horses.jpg";
import brrtt from "../assets/brrtt.wav";
import train from "../assets/train.wav";
import bjird from "../assets/bjird.wav";
import bobbo from "../assets/bobbo1.wav";
import bobbo2 from "../assets/bobbo2.wav";
import bobbo3 from "../assets/bobbo3.wav";
import tunes from "../assets/loontunes.wav";
import kiss from "../assets/seal.wav";
import frog from "../assets/ribbit.wav"
import neigh from "../assets/neigh.wav"
import clops from "../assets/clop.wav"


export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#ffffff",
        main: "#f5f5f5",
        dark: "#c2c2c2",
        contrastText: "#000000",
      },
    },
  });

  const [toot] = useSound(brrtt);
  const [whistle] = useSound(train);
  const [bird] = useSound(bjird);
  const [bob1] = useSound(bobbo);
  const [bob2] = useSound(bobbo2);
  const [bob3] = useSound(bobbo3);
  const [looney] = useSound(tunes);
  const [seal] = useSound(kiss);
  const [forg] = useSound(frog);
  const [horse] = useSound(neigh);
  const [horses] = useSound(clops);

  return (
    <React.Fragment>
      <Container
        sx={{ backgroundColor: "Blue" }}
        maxWidth="false"
        disableGutters
      >
        <Navbar />
        <Box
          sx={{
            maxWidth: "100vw",
            minHeight: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${picture})`,
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <ButtonGroup
                size="large"
                fullWidth="true"
                variant="outlined"
                aria-label="text button group"
              >
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture5})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={toot}
                ></Button>
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={whistle}
                ></Button>
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={bird}
                ></Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup
                size="large"
                fullWidth="true"
                variant="outlined"
                aria-label="text button group"
              >
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture7})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={bob1}
                ></Button>
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture8})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={bob2}
                ></Button>
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture9})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={bob3}
                ></Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup
                size="large"
                fullWidth="true"
                variant="outlined"
                aria-label="text button group"
              >
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                  }}
                  onClick={looney}
                ></Button>
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                  }}
                  onClick={seal}
                ></Button>
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={bob3}
                ></Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup
                size="large"
                fullWidth="true"
                variant="outlined"
                aria-label="text button group"
              >
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture10})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={horse}
                ></Button>
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture11})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={horses}
                ></Button>
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={bob3}
                ></Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup
                size="large"
                fullWidth="true"
                variant="outlined"
                aria-label="text button group"
              >
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture6})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={forg}
                ></Button>
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={bob2}
                ></Button>
                <Button
                  sx={{
                    mt: 1,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "15vh",
                      md: "27vh",
                      lg: "32vh",
                    }
                  }}
                  onClick={bob3}
                ></Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

// 2+ more sounds, new pictures
// change fonts
// change background pictures

