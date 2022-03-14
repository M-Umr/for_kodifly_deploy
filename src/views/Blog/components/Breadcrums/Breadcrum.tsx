import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: '#F8F9FC',
    height: 56,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 15,
    paddingLeft: 90,
    color: 'blue',
  },
});
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  const classes = useStyles();
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs className={classes.root} aria-label="breadcrumb">
        <Link underline="none" color="blue" href="/">
          Blog
        </Link>

        <Typography color="text.primary">Search Results</Typography>
      </Breadcrumbs>
    </div>
  );
}
