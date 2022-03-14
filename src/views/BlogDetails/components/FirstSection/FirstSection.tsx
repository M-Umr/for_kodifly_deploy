import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import img1 from '../../../../assets/images/Blog/Blog/image1.png';
import img2 from '../../../../assets/images/Blog/Blog/image2.png';
import img3 from '../../../../assets/images/Blog/Blog/image3.png';
import Container from 'components/Container';

const mock = [img1, img2, img3];

const FirstSection = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container display={'flex'} justifyContent={'center'}>
      <Box width={900}>
        <Typography
          fontFamily={' Lato'}
          fontStyle={'normal'}
          fontWeight={'normal'}
          fontSize={23}
          color="text.primary"
          align={'left'}
          color={'#2D3748'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          AI Animal Recognition Technology
        </Typography>
        <Box width={50} height={3} backgroundColor={'#377DFF'}></Box>
        <Typography
          // variant="h6"
          // component="p"
          color={'#2D3748'}
          fontFamily={'Lato'}
          fontStyle={'normal'}
          fontWeight={'normal'}
          fontSize={16}
          marginTop={3}
          align={'left'}
        >
          Collaborating with the Lung Fu Shan, Kodifly developed an Animal
          Recognition System to track the behaviours of wild animals. The AI
          Video Analytics System is able capture rare animals passing by the
          point of view of the deployed cameras. The Animal Recognition platform
          also allows the upload of pictures of animals.
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}
        >
          {mock.map((item, i) => (
            <Box marginTop={3} marginRight={4} key={i}>
              <Box
                component="img"
                height={{ md: 1, sm: 120 }}
                paddingBottom={{ sm: 2, md: 1 }}
                width={{ md: 220, sm: 300 }}
                src={item}
                alt="..."
                sx={{
                  filter:
                    theme.palette.mode === 'dark'
                      ? 'brightness(0) invert(0.7)'
                      : 'none',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default FirstSection;
