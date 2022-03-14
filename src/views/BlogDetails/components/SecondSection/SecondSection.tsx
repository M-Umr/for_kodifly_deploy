import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import img1 from '../../../../assets/images/Blog/Blog/image4.jpg';
import img2 from '../../../../assets/images/Blog/Blog/image5.jpg';
import img3 from '../../../../assets/images/Blog/Blog/image6.jpg';
import img4 from '../../../../assets/images/Blog/Blog/image7.jpg';
import Container from 'components/Container';

const mock = [img1, img2, img3, img4];

const SecondSection = (): JSX.Element => {
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
          Find The Animal You Desire
        </Typography>
        <Box width={50} height={3} backgroundColor={'#377DFF'}></Box>
        <Typography
          variant="h6"
          // component="p"
          color={'#2D3748'}
          fontFamily={'Lato'}
          fontStyle={'normal'}
          fontWeight={'normal'}
          fontSize={16}
          align={'left'}
          marginTop={2}
        >
          Kodifly developed an animal recognition platform for Lung Fu Shan. We
          use wildlife datasets collected collected by cameras deployed in LFS
          Park to train the AI. The AI model currently has an accuracy of 94.4%.
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
                height={{ md: 1, sm: 180 }}
                paddingBottom={{ sm: 2, md: 1 }}
                width={{ md: 220, sm: 260 }}
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

export default SecondSection;
