import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Typography, Box, Button, IconButton, AppBar, Stack, Drawer, Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Title from './Title'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import { useTheme } from '@mui/material/styles'
import AlertModal from './AlertModal'

interface NavigationProps {
  alert: any;
  mobile: boolean;
}

const buttonStyle = {
  color: `white`,
  fontSize: 20,
  fontWeight: 'bold'
}

const HomeIcon = (router:any, mobile: boolean) => <Image
  className={'fixed-image'}
  height={200}
  width={200}
  src={`/hex.svg`}
  alt={`3TF`}
  sizes={`2.5vw`}
  style={{
      minWidth: mobile ? `10vw` : `2.5vw`,
      width: mobile ? `10vw` : `2.5vw`, 
      maxWidth: mobile ? `10vw` : `2.5vw`,
      minHeight: mobile ? `10vw` : `2.5vw`,
      height: mobile ? `10vw` : `2.5vw`,
      maxHeight: mobile ? `10vw` : `2.5vw`,
  }}
  role={'button'}
  onClick={() => router.push(`/`, undefined, {scroll:false})}
/>

export default function Navigation({ alert, mobile }:NavigationProps) {
    const router = useRouter()
    const theme = useTheme()
    const [drawer, setDrawer] = useState<boolean>(false)
    const [authed, setAuthed] = useState<boolean>(false)

    useEffect(() => {
      
      return () => {
        setDrawer(false)
        setAuthed(authed)
      }
    },[])
    
    return (
        <AppBar className={'nav-fade'} color={"secondary"} elevation={0}>
          <AlertModal title={alert?.alertTitle} message={alert?.alertMessage} open={alert?.alertOpen} setOpen={alert?.setAlertOpen}/>
          <Stack sx={{justifyContent: 'space-between', display:{xs:'flex', sm:'none'}}} direction={"row"}>
          <Image className={'fixed-image'} alt={"3tf"} src={`/3tf.svg`} width={45} height={45} onClick={() => router.push(`/`, undefined, {scroll:false})}/>
            <IconButton onClick={()=>{drawer ? setDrawer(false) : setDrawer(true)}}>
              <MenuIcon fontSize={'large'} sx={{color:'white'}}/>
            </IconButton>
          </Stack>
          <Stack sx={{justifyContent: 'space-around', display:{xs:'none', sm:'flex'}}} direction={"row"}>
              <Image className={'fixed-image'} alt={"3tf"} src={`/3tf.svg`} width={45} height={45} onClick={() => router.push(`/`, undefined, {scroll:false})}/>
              <Button variant={"text"} sx={buttonStyle} onClick={()=>router.push(`/projects`, undefined, {scroll:false})}>PROJECTS</Button>
              <Button variant={"text"} sx={buttonStyle} onClick={()=>router.push(`/services`, undefined, {scroll:false})}>SERVICES</Button>
              <Button variant={"text"} sx={buttonStyle} onClick={()=>router.push(`/about`, undefined, {scroll:false})}>ABOUT</Button>
          </Stack>
          <Drawer anchor="right" open={drawer} onClose={()=> setDrawer(false)}>
            <Box sx={{ p: 2, height: 1 }}>
              <Box sx={{mx:'auto !important'}}>
              <Image className={'fixed-image'} alt={"3tf"} src={`/3tf.svg`} width={85} height={85} onClick={() => router.push(`/`, undefined, {scroll:false})}/>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ mb: 2 }}>
                <ListItemButton onClick={() => router.push(`/projects`, undefined, {scroll:false})}>
                    <ListItemIcon>
                        <AllInclusiveIcon color={"secondary"} />
                    </ListItemIcon>
                    <ListItemText primary="PROJECTS" sx={{color:"var(--secondary)"}} primaryTypographyProps={{variant:'h6'}} />
                </ListItemButton>
                <ListItemButton onClick={() => router.push(`/services`, undefined, {scroll:false})}>
                    <ListItemIcon>
                        <AllInclusiveIcon color={"secondary"} />
                    </ListItemIcon>
                    <ListItemText primary="SERVICES" sx={{color:"var(--secondary)"}} primaryTypographyProps={{variant:'h6'}} />
                </ListItemButton>
                <ListItemButton onClick={() => router.push(`/about`, undefined, {scroll:false})}>
                    <ListItemIcon>
                        <AllInclusiveIcon color={"secondary"} />
                    </ListItemIcon>
                    <ListItemText primary="ABOUT" sx={{color:"var(--secondary)"}} primaryTypographyProps={{variant:'h6'}} />
                </ListItemButton>
              </Box>
            </Box>
          </Drawer>
        </AppBar>
    )
}