import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#1976d2',
        color: 'white',
        textAlign: 'center',
        padding: '1rem 0',
        bottom: 0,
      }}
    >
      <Typography variant="body1">
        © 2025 Tour Guidance. All Rights Reserved.
      </Typography>
      <Typography variant="body2">
        Contact us: +94 776794047 | tour@guidance.com
      </Typography>
    </Box>
  );
};

export default Footer;