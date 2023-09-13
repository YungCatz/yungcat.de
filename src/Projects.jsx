import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

  export default function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={4}>
            <div ></div>
          </Grid>
          <Grid xs={4}>
          </Grid>
          <Grid xs={4}>
          </Grid>
          <Grid xs={4}>
          </Grid>
          <Grid xs={4}>
          </Grid>
          <Grid xs={4}>
          </Grid>
        </Grid>
      </Box>
    );
}
