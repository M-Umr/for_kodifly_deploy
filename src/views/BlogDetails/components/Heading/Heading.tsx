import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from 'components/Container';

const Heading = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container display={'flex'} justifyContent={'center'}>
      <Box width={900} display={'flex'} flexDirection={'column'}>
        <Box
          width={150}
          component={Chip}
          backgroundColor={'#377DFF'}
          color={'white'}
          marginRight={1}
          label="AI Vision & Analytics"
        />
        <Box>
          <Typography
            marginTop={2}
            variant="h4"
            color="text.primary"
            align={'left'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Lung Fu Shan Environmental Education Center
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Heading;
