import {useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Stack, Container, Typography, Box, Select, TextField, MenuItem, Button } from '@mui/material';
import Link from '../../components/Link';
import ProTip from '../../components/ProTip';
import Copyright from '../../components/Copyright';

const rustFunc = async (utils: any, a: number, b: number, operation: String) => {
  //const utils = await import("utils.wasm")
  if (operation === "add") {
    return utils.add(a, b)
  } else if (operation === "subtract") {
    return utils.subtract(a, b)
  } else if (operation === "multiply") {
    return utils.multiply(a, b)
  } else if (operation === "divide") {
    return utils.divide(a, b)
  }
}

const regularFunc = async (a: number, b: number, operation: String) => {
  //const utils = await import("utils.wasm")
  if (operation === "add") {
    return a + b
  } else if (operation === "subtract") {
    return a - b
  } else if (operation === "multiply") {
    return a * b
  } else if (operation === "divide") {
    return b > 0 ? a / b : a
  }
}

const Projects: NextPage = (props: any) => {
  const router = useRouter()
  const { slug } = router.query
  const operations = ["add", "subtract", "multiply", "divide"]
  const [operation, setOperation] = useState(operations[0])
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState(0)
  
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
          Projects
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
          <TextField label={"Y"} type={"number"} value={b} onChange={(e) => setB(Number(e.target.value))}/>
          <Button variant={"outlined"} onClick={async () => {
            console.time("rustFunc")
            const result = await rustFunc(props.utils, a, b, operation)
            console.timeEnd("rustFunc")
            console.time("regularFunc")
            const result2 = await regularFunc(a, b, operation)
            console.timeEnd("regularFunc")
            setResult(result)
            //setResult(await rustFunc(props.utils, a, b, operation))
          }}>Compute</Button>
          <Typography variant="h4" component="h1" gutterBottom> RESULT: {result}</Typography>
        </Stack>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Projects;