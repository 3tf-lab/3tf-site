import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from './Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color={`inherit`} href="/">The Third Transformation, LLC</Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}