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
      <Box className='page-box'>
        <Typography variant="h4" component="h1" gutterBottom>
          The Third Transformation
        </Typography>
        <ImageCarousel data={[
          `/hex.svg`,
          `https://www.the-artery.com/assets/landing-page/logo/ArteryLogo.svg`,
          `https://www.the-artery.com/assets/landing-page/gifs/desktop/film_obj_v1.gif`,
          `https://digiyo.io/logo512.png`
          ]} mobile={props.mobile}/>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Home;