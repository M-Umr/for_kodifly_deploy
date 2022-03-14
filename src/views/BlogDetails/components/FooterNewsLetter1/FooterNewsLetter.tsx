import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FooterNewsletter = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          fontWeight={700}
          variant={'h4'}
          align={'center'}
          gutterBottom
        >
          Start using A.I. to build the future
        </Typography>
        <Typography
          variant={'h6'}
          // component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          We provide state-of-the-art and innovation technologies to solve
          complicated problems.
        </Typography>
      </Box>
      <Box maxWidth={600} margin={'0 auto'}>
        <Box
          component={'form'}
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiInputBase-input.MuiOutlinedInput-input': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent={{ xs: 'center' }}
          >
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              height={54}
              marginTop={{ xs: 2, md: 0 }}
              marginLeft={{ md: 2 }}
            >
              CONTACT US
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterNewsletter;
