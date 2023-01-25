import * as React from 'react';
import { Stack, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Divider from '@mui/material/Divider';
import FixedImage from './FixedImage';

interface ServiceAccordionProps { services: any; }

export default function ServiceAccordion({ services }:ServiceAccordionProps) {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Stack>
      {
        services.map(
          (item: any, index: number) => (
            <Accordion
              key={`accordion-${index}`}
              expanded={expanded === index}
              onChange={handleChange(index)}
              color={`green`}
            >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${index}-content`}
              id={`${index}-summary`}
            >
              <Stack direction={"row"} spacing={1}>
                <item.icon />
                <Typography>{item.service}</Typography>
              </Stack>
            
          </AccordionSummary>
          <AccordionDetails id={`${index}-details`}>
            <Stack direction={`column`} spacing={2}>
              {item.description.split(`#`).map((paragraph: string, pid: number) => 
                <Typography key={`service-${index}-paragraph-${pid}`}>
                  {paragraph}
                </Typography>
              )}
            </Stack>
            <Typography variant={`h6`} sx={{mt:4}} gutterBottom>Tools</Typography>
            <List>
              {item.tools.map((tool: any, tid: number) =>
                <Stack direction={`column`} spacing={0}>
                    <ListItem key={`service-${index}-link-${tid}`}>
                      <ListItemButton component="a" href={tool.url}>
                        <ListItemIcon>
                          <ArrowForwardIosIcon />
                        </ListItemIcon>
                        <ListItemText primary={tool.name} />
                      </ListItemButton>
                    </ListItem>
                  <Divider  />
                </Stack>
              )}
            </List>
          </AccordionDetails>
        </Accordion>
          )
        )
      }
    </Stack>
  );
}

