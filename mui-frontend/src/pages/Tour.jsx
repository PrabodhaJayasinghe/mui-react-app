import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageCollage from "../components/ImageCollage";
import ControlledAccordions from "../components/Accordian";
import { BottomNavigation, Paper } from "@mui/material";
import BasicModal from "../components/Modal";
import axios from "axios";
import { useEffect, useState } from "react";

const Tour = () => {
  const { id } = useParams();
  const [tourData, setTourData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/tours/${id}`) 
      .then(response => {
        setTourData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('There was an error fetching the tour data!');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Typography variant="h4" component="h2">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h4" component="h2">{error}</Typography>;
  }

  if (!tourData) {
    return <Typography variant="h4" component="h2">Tour not found</Typography>;
  }

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={5}>
        {tourData.name}
      </Typography>

      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src={tourData.image}
          alt={tourData.name}
          height={325}
          width={600}
        />
        <ImageCollage />
      </Box>

      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>

        <Typography variant="body1" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          possimus expedita! Dolor, animi exercitationem. Quasi, eaque
          laudantium. Minima, harum! Ad cumque dicta maxime minus id. In,
          incidunt dolorem illo, sit aliquam dolorum, accusamus dolore eius
          optio quo sunt saepe. Illo.
        </Typography>
      </Box>

      <Box marginBottom={5}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={3}>
          Frequently asked questions
        </Typography>
        <ControlledAccordions />
      </Box>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
