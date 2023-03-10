import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Typography, Box } from '@mui/material';
import Navigation from '../components/Navigation';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';

const About: NextPage = (props: any) => {
  return (
    <Container maxWidth="lg">
      <Head><title>About</title></Head>
      <Navigation alert={props?.alert} mobile={props?.mobile} />
      <Box className='page-box'>
        <Typography variant={props.mobile ? "h6" : "h4"} component="h1" gutterBottom>ABOUT US</Typography>
        <Typography sx={{lineHeight:2}}>
          Our full-stack web3 engineering consultancy specializes in creating decentralized applications using blockchain technology. Our team of experts have a deep understanding of the web3 ecosystem and are well-versed in the use of smart contracts, decentralized storage, and other cutting-edge technologies. We work with clients from a variety of industries to build custom solutions that take advantage of the security and transparency offered by blockchain. Whether you're looking to create a new decentralized platform or integrate blockchain into your existing business, we have the expertise to help you succeed.
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default About;