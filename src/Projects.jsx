import * as React from 'react';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  textAlign: 'center',
  color: 'white',
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} paddingX={{ xs: 8, sm: 14, md: 16, lg: 22, xl: 34 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 0, sm: 3, md: 8, lg: 8, xl: 8 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} lg={4} xl={2} key={index}  sx={{ maxWidth: '600px' }}>
            <Item>
              <Skeleton
                sx={{
                  bgcolor: "rgba(255,255,255,.05)",
                  fontSize: "18rem",
                  borderRadius: "1.6rem",
                }}
                variant="rectangle"
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
