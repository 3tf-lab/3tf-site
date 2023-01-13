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

const Services: NextPage = (props: any) => {
  console.log('props: ', props)
  return (
    <Container maxWidth="lg">
      <Navigation alert={props?.alert} mobile={props?.mobile} />
      <Box className='page-box'>
        {/*<Title variant={"h4"} component={"h1"} gutterBottom={true} sx={{my:6}} title={`3TF`}/>*/}
        <Typography></Typography>
        <ProjectCarousel data={Object.entries(props.projects).map((item: any, index: number) => item[1])} mobile={props.mobile}/>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Services;