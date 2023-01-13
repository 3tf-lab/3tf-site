import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import Navigation from '../components/Navigation';
import Title from '../components/Title';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import ProjectCarousel from '../components/ProjectCarousel';

const Home: NextPage = (props: any) => {
  console.log('props: ', props)
  return (
    <Container maxWidth="lg">
      <Navigation alert={props?.alert} mobile={props?.mobile} />
      <Box className='page-box'>
        <Typography variant={props.mobile ? "h6" : "h4"} component="h1" gutterBottom>
          THE THIRD TRANSFORMATION
        </Typography>
        <ProjectCarousel data={Object.entries(props.projects).map((item: any, index: number) => item[1])} mobile={props.mobile}/>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Home;