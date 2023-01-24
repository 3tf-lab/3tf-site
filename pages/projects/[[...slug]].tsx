import {useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Stack, Container, Typography, Box, Select, TextField, MenuItem, Button } from '@mui/material';
import Navigation from '../../components/Navigation';
import ProjectCarousel from '../../components/ProjectCarousel';
import ProTip from '../../components/ProTip';
import Copyright from '../../components/Copyright';

const rustFunc = async (utils: any, a: number, b: number, operation: String) => {
  if (operation === "add") {
    return utils.add(a, b)
  } else if (operation === "subtract") {
    return utils.subtract(a, b)
  } else if (operation === "multiply") {
    return utils.multiply(a, b)
  } else if (operation === "divide") {
    return utils.divide(a, b)
  } else if (operation === "fibonacci") {
    return utils.fibonacci(a)
  }
}

const Projects: NextPage = (props: any) => {
  const router = useRouter()
  const { slug } = router.query
  const operations = ["add", "subtract", "multiply", "divide", "fibonacci"]
  const [operation, setOperation] = useState<string>(operations[0])
  const [a, setA] = useState<number>(0)
  const [b, setB] = useState<number>(0)
  const [result, setResult] = useState<number>(0)
  
  return (
    <Container maxWidth="lg">
      <Head><title>Projects</title></Head>
      <Navigation alert={props?.alert} mobile={props?.mobile} />
      <Box className='page-box'>
        <Typography variant={props.mobile ? "h6" : "h4"} component="h1" gutterBottom>PROJECTS</Typography>
        <ProjectCarousel data={Object.entries(props.projects).map((item: any, index: number) => item[1])} mobile={props.mobile}/>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Projects;