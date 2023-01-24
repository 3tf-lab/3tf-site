import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Stack, Typography, Box } from '@mui/material';
import Navigation from '../components/Navigation';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import ServiceAccordion from '../components/ServiceAccordion';

const Services: NextPage = (props: any) => {
  return (
    <Container maxWidth="lg">
      <Head><title>Services</title></Head>
      <Navigation alert={props?.alert} mobile={props?.mobile} />
      <Box className='page-box'>
        <Typography variant={props.mobile ? "h6" : "h4"} component="h1" gutterBottom>SERVICES</Typography>
        <ServiceAccordion services={Object.entries(props?.services).map((item: any, index: number) => item[1])} />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Services;