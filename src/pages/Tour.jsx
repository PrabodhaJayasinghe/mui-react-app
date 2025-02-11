import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageCollage from '../components/ImageCollage';
import ControlledAccordions from '../components/Accordian';
import { BottomNavigation, Paper } from '@mui/material';
import BasicModal from '../components/Modal';
import cities from '../data.json';

const Tour = () => {
    const { id } = useParams();
    let tourData = null;

    cities.forEach(city => {
        city.tours.forEach(tour => {
            if (tour.id.toString() === id) {
                tourData = tour;
            }
        });
    });

    if (!tourData) {
        return <Typography variant='h4' component='h2'>Tour not found</Typography>;
    }

    return (
        <Container sx={{width: 900}}>
            <Typography variant='h3' component='h1' marginTop={5}>
                {tourData.name}
            </Typography>
           
            <Box marginTop={3} sx={{display:'flex'}}>
                <img src={tourData.image} alt={tourData.name} height={325} width={600}/>
                <ImageCollage /> 
            </Box>

            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>
                    About this ticket
                </Typography>

                <Typography variant='body1' component='p' marginTop={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, possimus expedita! Dolor, animi exercitationem. Quasi, eaque laudantium. Minima, harum! Ad cumque dicta maxime minus id. In, incidunt dolorem illo, sit aliquam dolorum, accusamus dolore eius optio quo sunt saepe. Illo.
                </Typography>
            </Box>

            <Box marginBottom={5}>
                <Typography variant='h6' component='h4' marginTop={3} marginBottom={3}>
                    Frequently asked questions
                </Typography>
                <ControlledAccordions/>
            </Box>

            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    );
}

export default Tour;