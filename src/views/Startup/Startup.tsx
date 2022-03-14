import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import FooterNewsLetter from '../BlogDetails/components/FooterNewsLetter1';
import {
  Team,
  Features,
  Hero,
  Partners,
  Process,
  Reviews,
  Work,
} from './components';
import { useTheme } from '@mui/material/styles';

const Startup = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      <Hero />
      {/* <Box bgcolor={'primary.main'}>
        <Container paddingX={'0 !important'} maxWidth={1}>
          <Partners />
        </Container>
      </Box> */}
      <Container>
        <Features />
      </Container>
      <Container>
        <Process />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Work />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Container>
        <FooterNewsLetter />
      </Container>
      {/* <Divider />
      <Container>
        <Reviews />
      </Container>
      <Divider /> */}
      {/* <Container>
        <Team />
      </Container> */}
    </Main>
  );
};

export default Startup;
