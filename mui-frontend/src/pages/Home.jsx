import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AffordableImage from "../images/Affordable Prices.jpg";
import PersonalizedImage from "../images/Personalized Travel Itineraries.jpg";
import AssistantImage from "../images/Travel Assistence.jpg";
import "../index.css";

const Home = () => {
  const servicesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/services" && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url("https://images.unsplash.com/photo-1533850595620-7b1711221751?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "top",
          color: "white",
          textAlign: "center",
          width: "100%",
          flexDirection: "column",
          paddingTop: "100px",
        }}
      >
        <Typography variant="h2" component="h1" sx={{ fontSize: "4rem" , color: "black" }}>
          Welcome to TourWorld
        </Typography>
        <Typography variant="h5" component="h2" sx={{ marginTop: 2, color: "black" }}>
        Explore. Book. Discover. Experience the best tour guiding service in the world.
        </Typography>
      </Box>

      {/* Services Section */}
      <Container sx={{ marginTop: 5 }} ref={servicesRef}>
        <Typography
          variant="h4"
          component="h2"
          marginBottom={3}
          textAlign="center"
        >
          OUR SERVICES
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          <div style={{ textAlign: "center" }} className="service-box">
            <img
              src={AffordableImage}
              alt="Affordable Prices"
              className="service-image"
            />
            <Typography variant="h6" component="h3" marginTop={2}>
              Affordable Prices
            </Typography>
            <Typography variant="body1" component="p">
              We offer competitive prices for all our tours.
            </Typography>
          </div>

          <div style={{ textAlign: "center" }} className="service-box">
            <img
              src={PersonalizedImage}
              alt="Personalized Itineraries"
              className="service-image"
            />
            <Typography variant="h6" component="h3" marginTop={2}>
              Personalized Itineraries
            </Typography>
            <Typography variant="body1" component="p">
              Tailor-made itineraries to suit your preferences.
            </Typography>
          </div>

          <div style={{ textAlign: "center" }} className="service-box">
            <img
              src={AssistantImage}
              alt="Travel Assistance"
              className="service-image"
            />
            <Typography variant="h6" component="h3" marginTop={2}>
              Travel Assistance
            </Typography>
            <Typography variant="body1" component="p">
              24/7 support to ensure a smooth travel experience.
            </Typography>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
