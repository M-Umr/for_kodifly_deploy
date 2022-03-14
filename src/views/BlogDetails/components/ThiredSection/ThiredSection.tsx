import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import img1 from '../../../../assets/images/Blog/Blog/image8.jpg';
import img2 from '../../../../assets/images/Blog/Blog/image9.jpg';
import img3 from '../../../../assets/images/Blog/Blog/image10.jpg';
import Container from 'components/Container';

const mock = [
  { img: img1, title: 'Pets recognition system' },
  { img: img2, title: 'Automatic Capture of targeted Wildlife Animals' },
  { img: img3, title: 'Interactive Dashboard' },
];

const ThiredScetion = (): JSX.Element => {
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
          LFS Animal Recognition Platform
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
          Watch how the LFS Animal Recognition Platform is able to recognise
          uploaded images of wildlife animals.
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
                height={{ md: 100, sm: 180 }}
                paddingBottom={{ sm: 2, md: 1 }}
                width={{ md: 90, sm: 260 }}
                src={item.img}
                alt="..."
                sx={{
                  filter:
                    theme.palette.mode === 'dark'
                      ? 'brightness(0) invert(0.7)'
                      : 'none',
                }}
              />
              <Box width={190}>
                <Typography>{item.title}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
//component="p"
export default ThiredScetion;
