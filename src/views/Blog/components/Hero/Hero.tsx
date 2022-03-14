/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import BlogBackground from '../../../../assets/images/Blog/blogbackground.png';
import Container from 'components/Container';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
const Hero = (): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Box
        position={'relative'}
        sx={{
          backgroundImage:
            'url("https://assets.maccarianagency.com/backgrounds/img1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: -13,
          paddingTop: 13,
          '&:after': {
            position: 'absolute',
            content: '" "',
            width: '100%',
            height: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
            background: '#161c2d',
            opacity: 0.6,
          },
        }}
      >
        <Container
          zIndex={3}
          position={'relative'}
          minHeight={{ xs: 300, sm: 400, md: 600 }}
          maxHeight={600}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant="h2"
                align={'center'}
                sx={{
                  fontWeight: 700,
                  color: theme.palette.common.white,
                }}
              >
                Blog
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                align={'center'}
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                Case Studies on our previous work
              </Typography>
            </Box>
          </Box>
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          width={1}
          maxHeight={120}
          bottom={0}
          position={'absolute'}
          zIndex={2}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      {/* <Box
        display={'flex'}
        flexDirection={'row'}
        minHeight={680}
        height={'auto'}
        position={'relative'}
        //   sx={{
        //     backgroundColor: theme.palette.alternate.main,
        //     backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.dark} 100%)`,
        //   }}
      >
        <Box
          component={'img'}
          src={BlogBackground}
          height={500}
          width={'auto'}
          sx={{
            borderBottomRightRadius: '8%',

            borderBottomLeftRadius: '8%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 1,
            zIndex: 1,
          }}
        ></Box> */}

      {/* <Container
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'flex-end'}
          position={'relative'}
          zIndex={2}
        >
          <Box
            marginBottom={20}
            display={'flex'}
            flexDirection={'column'}
            alignItem={'center'}
          >
            <Typography
              textAlign={'center'}
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 900,
                color: 'common.white',
              }}
            >
              Blog
            </Typography>
            <Typography
              textAlign={'center'}
              variant="h6"
              component="p"
              color="text.primary"
              sx={{
                fontWeight: 400,
                color: 'common.white',
              }}
            >
              Case Studies on our previous work
            </Typography>
          </Box>
          <Box
            alignSelf={'flex-end'}
            padding={{ xs: 1, sm: 2 }}
            width={1}
            component={Card}
            boxShadow={1}
          >
            <form noValidate autoComplete="off">
              <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
                <Box
                  width={1}
                  marginRight={{ xs: 0, md: 2 }}
                  marginBottom={{ xs: 2, md: 0 }}
                >
                  <TextField
                    sx={{
                      height: 54,
                    }}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                            color={'primary.main'}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <Button
                    sx={{ height: 54, whiteSpace: 'nowrap' }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    fullWidth
                  >
                    Search
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'row'}
            padding={{ xs: 1, sm: 2 }}
            width={1}
            component={Stack}
          >
            <Box component={Chip} marginRight={1} label="Business" />
            <Box component={Chip} marginRight={1} label="Strategy" />
            <Box component={Chip} marginRight={1} label="Health" />
            <Box component={Chip} marginRight={1} label="Creativity" />
            <Box component={Chip} marginRight={1} label="Envirement" />
            <Box component={Chip} marginRight={1} label="Stories" />
          </Box>
        </Container>
      </Box> */}
    </>
  );
};

export default Hero;
