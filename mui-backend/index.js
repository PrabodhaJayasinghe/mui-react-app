import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.BACKEND_PORT
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json()); 

async function testDbConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Database connection successful');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1); // Exit the process if the connection fails
  }
}

// Call the testDbConnection function
testDbConnection();

// Get all cities
app.get('/cities', async (req, res) => {
  try {
    const cities = await prisma.city.findMany();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

// Get specific tour
app.get('/tours/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await prisma.tour.findUnique({
      where: { id: parseInt(id) },
    });
    if (!tour) {
      return res.status(404).json({ error: 'Tour not found' });
    }
    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the tour' });
  }
});

// Get all tours
app.get('/tours', async (req, res) => {
  try {
    const tours = await prisma.tour.findMany();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tours' });
  }
});

// Get cities including the relevant tours
app.get('/cities-with-tours', async (req, res) => {
  try {
    const citiesWithTours = await prisma.city.findMany({
      include: { tours: true },
    });
    res.json(citiesWithTours);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cities with tours' });
  }
});

// Create a new city
app.post('/cities', async (req, res) => {
  const { name } = req.body;
  try {
    const newCity = await prisma.city.create({
      data: { name },
    });
    res.status(201).json(newCity);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create city' });
  }
});

// Create a new tour
app.post('/tours', async (req, res) => {
  const { name, duration, rating, numberOfReviews, price, image, cityId } = req.body;
  try {
    const newTour = await prisma.tour.create({
      data: { name, duration, rating, numberOfReviews, price, image, cityId },
    });
    res.status(201).json(newTour);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create tour' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});