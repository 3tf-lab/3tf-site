import {useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Stack, Container, Typography, Box, Select, TextField, MenuItem, Button } from '@mui/material';
import Link from '../../components/Link';
import Navigation from '../../components/Navigation';
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
      <Navigation alert={props?.alert} mobile={props?.mobile} />
      <Box className='page-box'>
        <Typography variant={props.mobile ? "h6" : "h4"} component="h1" gutterBottom>
          PROJECTS
        </Typography>
        {
        slug 
        ? 
        (Object.keys(slug).map((key: String, index: number) => (
          <Typography key={`${index}`}>{slug[index]}</Typography>
        )))
        :
        <Typography>Free of Slugs</Typography>
        }
        <Stack spacing={2}>
          <Select label={"Operation"} value={operation} onChange={(e) => setOperation(e.target.value)}>
            {operations.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
          </Select>
          <TextField label={"X"} type={"number"} value={a} onChange={(e) => setA(Number(e.target.value))}/>
          <TextField disabled={operation === "fibonacci"} label={"Y"} type={"number"} value={b} onChange={(e) => setB(Number(e.target.value))}/>
          <Button variant={"outlined"} onClick={async () => setResult(await rustFunc(props.utils, a, b, operation))}>Compute</Button>
          <Typography variant="h4" component="h1" gutterBottom> RESULT: {result}</Typography>
        </Stack>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Projects;