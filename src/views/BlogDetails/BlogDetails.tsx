import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Hero from './components/Hero';
import Heading from './components/Heading';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThiredSection from './components/ThiredSection';
import Author from './components/Author';
import SimilarStories from './components/SimilarStories';
import FooterNewsLetter from './components/FooterNewsLetter1';
import { useTheme } from '@mui/material/styles';
const BlogDetails = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      <Hero />
      <Heading />
      <FirstSection />
      <SecondSection />
      <ThiredSection />
      <Author />
      <Box bgcolor={'alternate.main'}>
        <SimilarStories />
        <FooterNewsLetter />
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
    </Main>
  );
};

export default BlogDetails;
