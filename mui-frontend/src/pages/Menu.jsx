import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cities-with-tours') 
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cities with tours!', error);
      });
  }, []);

  return (
    <div className="app">
      <Container sx={{ marginTop: 5 }}>
        {cities.map((city) => (
          <div key={city.id}>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
              textAlign={"center"}
            >
              Top {city.name} Tours
            </Typography>

            <Grid container spacing={5} marginBottom={5}>
              {city.tours.map((tour) => (
                <TourCard tour={tour} key={tour.id} />
              ))}
            </Grid>
          </div>
        ))}
      </Container>
      <Box sx={{ height: 80 }} />
    </div>
  );
};

export default Menu;