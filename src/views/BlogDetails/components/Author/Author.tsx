import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ProfilePic from '../../../../assets/images/Blog/Blog/profile.png';

import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Author = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box sx={{ width: { md: 900 } }}>
        <Divider />
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        sx={{
          marginRight: { xs: 3, md: 0 },
          marginTop: { md: 2 },
          width: { md: 900 },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box display={'flex'}>
          <Avatar src={ProfilePic} sx={{ width: 50, height: 50 }} />
          <Box
            marginLeft={1}
            sx={{
              // marginTop: { md: 2 },
              //width: { md: 900 },
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Typography
              textAlign={'center'}
              // component="p"
              fontFamily="Lato"
              fontStyle={'normal'}
              fontWeight={'bold'}
              color="#2D3748"
              fontSize={16}
              // sx={{}}
            >
              Lawrence Wong
            </Typography>
            <Typography
              textAlign={'center'}
              // component="p"
              fontFamily={'Lato'}
              fontStyle={'normal'}
              fontWeight={'normal'}
              fontSize={14}
              color="#646E73"
              // sx={{}}
            >
              May 19, 2021
            </Typography>
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Typography color={'text.secondary'}>Share:</Typography>
          <Box marginLeft={0.5}>
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Author;
