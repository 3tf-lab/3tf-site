import { useRouter } from 'next/router';
import Carousel from 'react-material-ui-carousel'
import FixedImage from './FixedImage'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {useWindowSize} from 'react-use'
import CircularLoader from './CircularLoader'
import Link from './Link';
import { string } from 'prop-types';

interface ProjectCarouselProps { data: any; mobile: boolean; landing: boolean; }

export default function ProjectCarousel({ data, mobile, landing }:ProjectCarouselProps) {
    const router = useRouter()
    const theme = useTheme()
    return (
      data ? 
        <Carousel
            sx={{
              minWidth: {xs:`90vw`, sm:`35vw`},
              width:{xs:`90vw`, sm:`35vw`},
              maxWidth: {xs:`90vw`, sm:`35vw`}
            }}
            autoPlay={false}
            fullHeightHover={false}
            NextIcon={<KeyboardArrowRightIcon fontSize='large'/>}
            PrevIcon={<KeyboardArrowLeftIcon fontSize='large'/>}
            navButtonsProps={{
              style:{
                backgroundColor:`transparent`,
                color:theme.palette.secondary.main,
                fontWeight:'bold',
                opacity: 1
              }
            }}
            indicatorIconButtonProps={{
              style: {
                  padding: '0px',
                  color: 'gray'
              }
            }}
            activeIndicatorIconButtonProps={{
              style: {
                  color: theme.palette.secondary.main,
                  opacity:1
              }
            }}
            indicatorContainerProps={{
              style: {
                  marginTop: `1.5vh`,
              }
      
            }}
          >
            {data.map((item: any, index: number) => (
              <Box className={"carousel-box"}>
                <Typography variant={'h4'} alignSelf={'center'}>
                  <Link href={item.url}>{item.name}</Link>
                </Typography>
                <FixedImage key={index} height={500} width={500} size={mobile ? `90vw` : `35vw`} url={item?.images[0]} alt={`loading...`} onClick={() => router.push(`${landing ? `projects/` : ``}${item.name}`)}/>
                <Typography variant={'h5'} alignSelf={'center'}>{item.description}</Typography>
              </Box>
            )
            )}
          </Carousel>
          :
          <CircularLoader />
    )
}