import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Typography, Box } from '@mui/material';
import Navigation from '../components/Navigation';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import ProjectCarousel from '../components/ProjectCarousel';

const Home: NextPage = (props: any) => {
  return (
    <Container maxWidth="lg">
      <Head><title>3TF</title></Head>
      <Navigation alert={props?.alert} mobile={props?.mobile} />
      <Box className='page-box'>
        <Typography variant={props.mobile ? "h6" : "h4"} component="h1" gutterBottom>THE THIRD TRANSFORMATION</Typography>
        <ProjectCarousel data={Object.entries(props.projects).map((item: any, index: number) => item[1])} mobile={props.mobile} landing={true}/>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Home;