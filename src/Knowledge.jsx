import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { Container } from '@mui/material';
import DevIcon from "devicon";

const Item = styled('div')(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: '2rem',
  borderRadius: '16px',
  border: '1px solid white',
}));

export default function Knowledge() {
  return (
    <Container className="my-[22rem] text-shadow border" sx={{ 'margin-left': 'auto', 'alignContent': 'center'}}>
      <Grid container
          sx={{
            '& .MuiGrid-root': {
              transition: 'transform 0.3s',
            },
            '&:hover .MuiGrid-root': {
              transform: 'scale(1.05)',
            },
          }}>
        <Grid>
          <Item>
            <i class="devicon-javascript-plain text-7xl"></i>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <i class="devicon-html5-plain-wordmark text-7xl"></i>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <i class="devicon-css3-plain-wordmark text-7xl"></i>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <i class="devicon-tailwindcss-original-wordmark text-7xl"></i>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <i class="devicon-materialui-plain text-7xl"></i>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <i class="devicon-bootstrap-plain-wordmark text-7xl"></i>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <i class="devicon-figma-plain text-7xl"></i>
          </Item>
        </Grid>

        <Grid>
          <Item>
            <i class="devicon-java-plain-wordmark text-7xl"></i>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <i class="devicon-react-original-wordmark text-7xl"></i>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <i class="devicon-spring-plain-wordmark text-7xl"></i>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <i class="devicon-mysql-plain-wordmark text-7xl"></i>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <i class="devicon-git-plain-wordmark text-7xl"></i>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}