import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import ImageCarousel from '../components/ImageCarousel';

const Home: NextPage = (props: any) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: `7.5vh`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          The Third Transformation
        </Typography>
        <ImageCarousel data={[`/hex.svg`, `/3tf.svg`]} mobile={props.mobile}/>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Home;