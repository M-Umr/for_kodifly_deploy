import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Animals from '../../../../assets/images/animals_detection.gif'
import Dashboard from '../../../../assets/images/dashboard.gif'
import Inventory from '../../../../assets/images/inventory.gif'

const mock = [
  {
    title: 'Wild Animal Detection Recognition',
    description:
      'Work with environment professionals to develop an integrated AI system that automatically process huge amount of data from camera trap imaging (automatic photography of animal species in the wild).',
    illustration:
      Animals,
    illustrationDark:
      'https://assets.maccarianagency.com/svg/illustrations/illustration4--dark.svg',
  },
  {
    title: 'Intelligent Inventory Transfer Portal',
    description:
      'Acquiring data from multiple sources and a admin dashboard with custom Artificial Intelligence recommendation feature developed to forecast the sales and inventory transfer volume to retail points.',
    illustration:
      Inventory,
    illustrationDark:
      'https://assets.maccarianagency.com/svg/illustrations/illustration1--dark.svg',
  },
  {
    label: 'Human-focused Dashboard for Co-working Center',
    title: 'Human-focused Dashboard for Co-working Center',
    description:
      'Developing an integrated system which can manage booking for meeting rooms, ordering for specific service, scheduled payment, invoice generation & management, user login authentication, and admin dashboard development.',
    illustration:
      Dashboard,
    illustrationDark:
      'https://assets.maccarianagency.com/svg/illustrations/illustration2--dark.svg',
  },
];

const Work = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Our work
        </Typography>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} align={'center'}>
          We work with clients from different industry to develop innovative solutions. 
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
        >
          {/* Unlike teams from big agencies, we will treat your project as ours. We
          will walk you through our smooth and simple process. */}
        </Typography>
        <Box marginTop={2} display={'flex'} justifyContent={'center'}>
          {/* <Button
            color={'primary'}
            variant={'contained'}
            size={'large'}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={20}
                height={20}
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          >
            Contact us
          </Button> */}
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
            key={i}
            item
            container
            xs={12}
            spacing={4}
            direction={i % 2 === 1 ? 'row-reverse' : 'row'}
          >
            <Grid item container alignItems={'center'} xs={12} sm={6}>
              <Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
                {/* <Button
                  size={'large'}
                  sx={{ marginTop: 2 }}
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </Box>
                  }
                >
                  Learn more
                </Button> */}
              </Box>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              alignItems={'center'}
              xs={12}
              sm={6}
            >
              <Box
                component={'img'}
                src={`${
                  theme.palette.mode === 'light'
                    ? item.illustration
                    : item.illustrationDark
                }`}
                alt={item.title}
                width={1}
                maxWidth={'80%'}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
