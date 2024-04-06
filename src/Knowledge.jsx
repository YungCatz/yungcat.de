import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import {Container, Tooltip} from '@mui/material';
import waterColor from './assets/Water-Color.webp';
import DevIcon from "devicon";

const RoundedItem = styled('div')(() => ({
    borderRadius: '.4rem',
    overflow: 'hidden',
}));

const Item = styled('div')(() => ({
    position: 'relative',
    padding: '2rem',
    border: '4px solid rgba(255, 255, 255, 0.5)',

    '&:hover': {
        border: '4px solid transparent',
        borderImage: `url(${waterColor})`,
        borderImageSlice: '1',
    }
}));

// eslint-disable-next-line react/prop-types
function IconGridItem({title, icon}) {
    return (
        <Grid className="hover-info relative">
            <Tooltip title={title}>
                <RoundedItem>
                    <Item>
                        <i className={`devicon-${icon}-plain text-7xl`}></i>
                    </Item>
                </RoundedItem>
            </Tooltip>
        </Grid>
    )
}

export default function Knowledge() {

    return (
        <>
            <Container className="my-[22rem] text-shadow" maxWidth="md">
                <h1 className="font-roboto font-bold text-2xl my-5 tracking-[1rem] text-shadow text-center">
                    SKILLS
                </h1>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        "& .MuiGrid-root": {
                            transition: "transform 0.3s",
                        },
                        "& > .MuiGrid-root:hover": {
                            transform: "scale(1.08)",
                        },
                    }}
                >
                    <IconGridItem title="JavaScript" icon="javascript" />
                    <IconGridItem title="HTML" icon="html5" />
                    <IconGridItem title="CSS" icon="css3" />
                    <IconGridItem title="TailwindCSS" icon="tailwindcss" />
                    <IconGridItem title="MaterialUI" icon="materialui" />
                    <IconGridItem title="Bootstrap" icon="bootstrap" />
                    <IconGridItem title="NodeJS" icon="nodejs" />
                    <IconGridItem title="Figma" icon="figma" />
                    <IconGridItem title="Java" icon="java" />
                    <IconGridItem title="React" icon="react" />
                    <IconGridItem title="VueJS" icon="vuejs" />
                    <IconGridItem title="Spring" icon="spring" />
                    <IconGridItem title="MySQL" icon="mysql" />
                    <IconGridItem title="Git" icon="git" />
                    <IconGridItem title="Linux" icon="linux" />
                </Grid>
            </Container>
        </>
    );
}