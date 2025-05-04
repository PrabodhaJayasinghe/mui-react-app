import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedData = [
  {
    name: "Niagara Falls",
    tours: [
      {
        name: "Immerse into the Falls",
        duration: 5,
        rating: 4.5,
        numberOfReviews: 462,
        price: 465,
        image: "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg",
      },
      {
        name: "Helicopter Over the Falls",
        duration: 8,
        rating: 3.5,
        numberOfReviews: 641,
        price: 385,
        image: "https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg",
      },
      {
        name: "The Falls at Night",
        duration: 2,
        rating: 4.5,
        numberOfReviews: 133,
        price: 144,
        image: "https://c4.wallpaperflare.com/wallpaper/691/763/672/the-sky-night-lights-river-wallpaper-preview.jpg",
      },
      {
        name: "Niagara in Winter",
        duration: 5,
        rating: 4.9,
        numberOfReviews: 400,
        price: 600,
        image: "https://vanillynbakery.com/wp-content/uploads/2022/04/niagara_falls-16.jpg",
      },
    ],
  },
  {
    name: "Las Vegas",
    tours: [
      {
        name: "All Around the World",
        duration: 5,
        rating: 4.5,
        numberOfReviews: 462,
        price: 465,
        image: "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg",
      },
      {
        name: "View the Casinos",
        duration: 5,
        rating: 4.5,
        numberOfReviews: 462,
        price: 465,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH0Goy_BZhWdz7RodvvQb_n9rvHOWr0l7TFeezcw03zTQb2Xy8ezCDz0-ceO3CNnc4Po&usqp=CAU",
      },
      {
        name: "Show Me the Magic",
        duration: 8,
        rating: 3.5,
        numberOfReviews: 641,
        price: 385,
        image: "https://footwearnews.com/wp-content/uploads/2020/10/magic-trade-show-las-vegas.jpg",
      },
      {
        name: "The City at Night",
        duration: 2,
        rating: 4.5,
        numberOfReviews: 133,
        price: 144,
        image: "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg",
      },
    ],
  },
];

const seedDatabase = async () => {
  try {
    for (const city of seedData) {
      // Create city with its tours
      const createdCity = await prisma.city.create({
        data: {
          name: city.name,
          tours: {
            create: city.tours,
          },
        },
      });

      console.log(`Created city: ${createdCity.name}`);
    }

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error.message);
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();