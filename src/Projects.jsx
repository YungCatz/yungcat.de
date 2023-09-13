import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  borderColor: 'white',
  borderWidth: 1,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'white',
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} paddingX={{ xs: 4, sm: 16, md: 26}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
