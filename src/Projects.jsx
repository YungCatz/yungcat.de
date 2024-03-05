import React, {useState, useEffect} from 'react';
import {Container, Box, Grid, Skeleton} from '@mui/material';
import styled from "@mui/system/styled";

export default function ResponsiveGrid() {
    const [gridConfig, setGridConfig] = useState({xs: 1, sm: 1, md: 1, lg: 1});

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 899) {
                setGridConfig({xs: 0, sm: 0});
            } else if (window.innerWidth < 1535) {
                setGridConfig({xs: 1, sm: 1, md: 1, lg: 1});
            } else {
                setGridConfig({xs: 1, sm: 1, md: 1, lg: 3});
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const AnchorWrapper = styled('a')(() => ({
        fontFamily: 'Roboto, sans-serif',
        letterSpacing: '4px',

        borderBottom: '2px solid transparent',
        borderImage: 'url(src/assets/waterColor-dark.png)',
        borderImageSlice: '1',
        padding: '2rem 1rem 0rem 1rem',
    }));

    return (
        <>
            <Container
                className="py-36"
                maxWidth="xl"
                sx={{
                    maxWidth: "1600px",
                }}
            >
                <h1 className="font-roboto font-bold text-2xl my-3 tracking-[1rem] text-shadow text-center">
                    PROJECTS
                </h1>
                <Box sx={{flexGrow: 1}} className="mb-4">
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            '& .MuiSkeleton-root': {
                                transition: 'transform 0.3s',
                            },
                            '& > *:hover .MuiSkeleton-root': {
                                transform: 'scaleY(1.04) scaleX(1.02)',
                            },
                        }}
                    >
                        {Array.from(Array(gridConfig.xs)).map((_, index) => (
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={index}>
                                <Skeleton
                                    sx={{
                                        bgcolor: "rgba(255,255,255,.05)",
                                        fontSize: "18rem",
                                        borderRadius: "1.6rem",
                                        padding: "1rem",
                                    }}
                                    variant="rectangular"
                                />
                            </Grid>
                        ))}
                        {Array.from(Array(gridConfig.sm)).map((_, index) => (
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={index}>
                                <Skeleton
                                    sx={{
                                        bgcolor: "rgba(255,255,255,.05)",
                                        fontSize: "18rem",
                                        borderRadius: "1.6rem",
                                        padding: "1rem",
                                    }}
                                    variant="rectangular"
                                />
                            </Grid>
                        ))}
                        {Array.from(Array(gridConfig.md)).map((_, index) => (
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={index}>
                                <Skeleton
                                    sx={{
                                        bgcolor: "rgba(255,255,255,.05)",
                                        fontSize: "18rem",
                                        borderRadius: "1.6rem",
                                        padding: "1rem",
                                    }}
                                    variant="rectangular"
                                />
                            </Grid>
                        ))}
                        {Array.from(Array(gridConfig.lg)).map((_, index) => (
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={index}>
                                <Skeleton
                                    sx={{
                                        bgcolor: "rgba(255,255,255,.05)",
                                        fontSize: "18rem",
                                        borderRadius: "1.6rem",
                                        padding: "1rem",
                                    }}
                                    variant="rectangular"
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <AnchorWrapper href={'/projects'}>
                    &gt; SEE MORE
                </AnchorWrapper>
            </Container>
        </>
    );
}
