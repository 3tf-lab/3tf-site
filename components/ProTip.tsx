import * as React from 'react';
import Link from './Link';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Typography from '@mui/material/Typography';


export default function ProTip() {
  return (
    <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
      <EmailOutlinedIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
      <Link href="mailto:slucasmyer@icloud.com">Get in touch</Link>
    </Typography>
  );
}