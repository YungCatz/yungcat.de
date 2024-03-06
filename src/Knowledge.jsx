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
                    <Grid className="hover-info relative">
                        <Tooltip title="JavaScript">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-javascript-plain text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="HTML">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-html5-plain-wordmark text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="CSS">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-css3-plain-wordmark text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="TailwindCSS">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-tailwindcss-original-wordmark text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="MaterialUI">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-materialui-plain text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="Bootstrap">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-bootstrap-plain-wordmark text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="NodeJS">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-nodejs-plain-wordmark text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="Figma">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-figma-plain text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="Java">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-java-plain-wordmark text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="React">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-react-plain-wordmark text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="VueJS">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-vuejs-plain-wordmark text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="Spring">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-spring-plain-wordmark text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="MySQL">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-mysql-plain-wordmark text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>

                    <Grid>
                        <Tooltip title="Git">
                            <RoundedItem>
                                <Item>
                                    <i className="devicon-git-plain-wordmark text-7xl"></i>
                                </Item>
                            </RoundedItem>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}