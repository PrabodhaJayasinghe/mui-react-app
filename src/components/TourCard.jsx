import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2" },
          style: { fontSize: 11 },
        },
        {
          props: { variant: "body3" },
          style: { fontSize: 9 },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid size={{ xs: 3 }}>
      <ThemeProvider theme={theme}>
        <Link to={`/${tour.id}`} style={{ textDecoration: "none" }}>
          <Paper elevation={3}>
            <img src={tour.image} alt="" className="img" />
            <Box padding={1}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTimeIcon sx={{ width: 12.5 }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration} hours
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                marginTop={3}
              >
                <Rating
                  name="read-only"
                  value={4.5}
                  readOnly
                  precision={0.5}
                  size="small"
                />

                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>
                <Typography variant="body3" component="p" marginLeft={0.5}>
                  ({tour.numberOfReviews} reviews)
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h3" marginTop={0}>
                  From C {tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Link>
      </ThemeProvider>
    </Grid>
  );
};

TourCard.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numberOfReviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default TourCard;
