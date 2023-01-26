import {useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Stack, Container, Typography, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '../../components/Link';
import FixedImage from '../../components/FixedImage';
import Navigation from '../../components/Navigation';
import ProjectCarousel from '../../components/ProjectCarousel';
import ProTip from '../../components/ProTip';
import Copyright from '../../components/Copyright';

const Projects: NextPage = (props: any) => {
  const router = useRouter()
  const { slug } = router.query
  console.log(props.projects)
  console.log(slug ? slug[0].toLowerCase() : "no slug")
  const project = slug && slug[0] ? props.projects[slug[0].toLowerCase()] : {}
  console.log("project", project)
  return (
    <Container maxWidth="lg">
      <Head><title>Projects</title></Head>
      <Navigation alert={props?.alert} mobile={props?.mobile} />
      <Box className='page-box'>
        <Typography hidden={slug && slug[0] ? true : false} variant={props.mobile ? "h6" : "h4"} component="h1" gutterBottom>PROJECTS</Typography>
        {
        slug && slug[0]
        ?
        <Stack key={`project-hero-stack`} direction={`column`} spacing={2}>
          <Typography alignSelf={`center`} variant={props.mobile ? "h6" : "h4"} component="h1" gutterBottom>{project.name}</Typography>
          <FixedImage key={slug[0]} height={500} width={500} size={props.mobile ? `90vw` : `45vw`} url={props.projects[slug[0].toLowerCase()]?.images[0]} alt={`loading...`} onClick={() => router.push(`${project.url}`)}/>
          <Typography variant={props.mobile ? "subtitle2" : "subtitle1"} component="p" gutterBottom>{props.projects[slug[0].toLowerCase()].description}</Typography>
          <Typography variant={props.mobile ? "h6" : "h4"} component="p" gutterBottom>
            <Link href={project.github}>CODE ARCHIVE</Link>
          </Typography>
          <Typography variant={props.mobile ? "h6" : "h4"} sx={{mt:4}} gutterBottom>Tools</Typography>
          <List>
              {props.projects[slug[0].toLowerCase()].tools.map((tool: any, tid: number) =>
                <Stack direction={`column`} spacing={0}>
                    <ListItem key={`project-${tool}-link-${tid}`}>
                      <ListItemButton component="a" href={tool.url}>
                        <ListItemIcon>
                          <ArrowForwardIosIcon color={'primary'} />
                        </ListItemIcon>
                        <ListItemText primary={tool} />
                      </ListItemButton>
                    </ListItem>
                  <Divider color={`primary`}/>
                </Stack>
              )}
            </List>
        </Stack>
        :
        <ProjectCarousel data={Object.entries(props.projects).map((item: any, index: number) => item[1])} mobile={props.mobile} landing={false}/>
        }
        

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Projects;