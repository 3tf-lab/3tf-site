import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Typography, Box, Button, IconButton, AppBar, Stack, Drawer, Divider, ListItemButton, ListItemIcon, ListItemText, Slide, useScrollTrigger } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Title from './Title'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
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

export default function Navigation({ alert, mobile }:NavigationProps) {
    const router = useRouter()
    const theme = useTheme()
    const trigger = useScrollTrigger()
    const [drawer, setDrawer] = useState<boolean>(false)
    const [authed, setAuthed] = useState<boolean>(false)

    useEffect(() => {
      return () => {
        setDrawer(false)
        setAuthed(authed)
      }
    },[])
    
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={'nav-fade'} color={"secondary"} elevation={0}>
          <AlertModal title={alert?.alertTitle} message={alert?.alertMessage} open={alert?.alertOpen} setOpen={alert?.setAlertOpen}/>
          <Stack sx={{justifyContent: 'space-between', display:{xs:'flex', sm:'none'}}} direction={"row"}>
          <Image style={{padding:`.25rem .25rem .25rem .25rem`}} className={'fixed-image'} alt={"3tf"} src={`/3tf.svg`} width={45} height={45} onClick={() => router.push(`/`, undefined, {scroll:false})}/>
            <IconButton onClick={()=>{drawer ? setDrawer(false) : setDrawer(true)}}>
              <MenuIcon fontSize={'large'} sx={{color:'white'}}/>
            </IconButton>
          </Stack>
          <Stack sx={{justifyContent: 'space-around', display:{xs:'none', sm:'flex'}}} direction={"row"}>
              <Image style={{padding:`.25rem .25rem .25rem .25rem`}} className={'fixed-image'} alt={"3tf"} src={`/3tf.svg`} width={45} height={45} onClick={() => router.push(`/`, undefined, {scroll:false})}/>
              <Button variant={"text"} sx={buttonStyle} onClick={()=>router.push(`/projects`, undefined, {scroll:false})}>PROJECTS</Button>
              <Button variant={"text"} sx={buttonStyle} onClick={()=>router.push(`/services`, undefined, {scroll:false})}>SERVICES</Button>
              <Button variant={"text"} sx={buttonStyle} onClick={()=>router.push(`/about`, undefined, {scroll:false})}>ABOUT</Button>
          </Stack>
          <Drawer anchor="right" open={drawer} onClose={()=> setDrawer(false)}>
            <Box sx={{ p: 2, height: 1 }}>
              <Box className={`centered-box`}>
              <Image className={'fixed-image'} alt={"3tf"} src={`/3tf.svg`} width={85} height={85} onClick={() => router.push(`/`, undefined, {scroll:false})}/>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ mb: 2 }}>
                <ListItemButton onClick={() => router.push(`/projects`, undefined, {scroll:false})}>
                    <ListItemIcon>
                        <AccountTreeOutlinedIcon color={"secondary"} />
                    </ListItemIcon>
                    <ListItemText primary="PROJECTS" sx={{color:"var(--secondary)"}} primaryTypographyProps={{variant:'h6'}} />
                </ListItemButton>
                <ListItemButton onClick={() => router.push(`/services`, undefined, {scroll:false})}>
                    <ListItemIcon>
                        <DesignServicesOutlinedIcon color={"secondary"} />
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
      </Slide>
    )
}