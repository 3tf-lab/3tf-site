import Carousel from 'react-material-ui-carousel'
import FixedImage from './FixedImage'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useTheme } from '@mui/material/styles';
import {useWindowSize} from 'react-use'
import CircularLoader from './CircularLoader'

interface ImageCarouselProps { data: any; mobile: boolean; }

export default function ImageCarousel({ data, mobile }:ImageCarouselProps) {
    const theme = useTheme()
    const carouselWidth = mobile ? `100vw` : `${Number(useWindowSize().width /60)}vw`
    return (
      data ? 
        <Carousel
            sx={{
              minWidth: {xs:`100vw`, sm:`50vw`},
              width:{xs:`100vw`, sm:`50vw`},
              maxWidth: {xs:`100vw`, sm:`50vw`}
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
            {data.map((item: string, index: number) => <FixedImage key={index} size={mobile ? `100vw` : `50vw`} url={item} alt={`loading...`}/>)}
          </Carousel>
          :
          <CircularLoader />
    )
}