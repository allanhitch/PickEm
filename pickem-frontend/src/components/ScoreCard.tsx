import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function ScoreCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', minWidth: 275 }}>     
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 40, height: 40 }}
          image="https://www.thesportsdb.com/images/media/team/badge/xvuwtw1420646838.png"
          alt="Team Badge"
        />
        <Typography component="div" variant="h6">
          Arizona Cardinals 22
        </Typography>
        </CardContent>
      </Box>    
      <Box sx={{ display: 'inline-flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 40, height: 40 }}
          image="https://www.thesportsdb.com/images/media/team/badge/rrpvpr1420658174.png"
          alt="Team Badge"
        />
        <Typography component="div" variant="h6">
          Atlanta Falcons 22
        </Typography>
        </CardContent>
      </Box>   
    </Card>
  );
}
