import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon/>,
        title: 'Adaptable Insights',
        description:
            'Our AI-powered tools automatically adapt to evolving market trends, providing actionable insights tailored to your needs.',
    },
    {
        icon: <ConstructionRoundedIcon/>,
        title: 'Built for Scalability',
        description:
            'Designed to grow with you, our platform handles everything from individual trades to large-scale monitoring with ease.',
    },
    {
        icon: <ThumbUpAltRoundedIcon/>,
        title: 'Seamless User Experience',
        description:
            'Effortlessly navigate our intuitive interface, ensuring every feature is at your fingertips on any device.',
    },
    {
        icon: <AutoFixHighRoundedIcon/>,
        title: 'Innovative AI Functionality',
        description:
            'Leverage advanced AI-driven features to stay ahead, from tracking whales to detecting suspicious patterns.',
    },
    {
        icon: <SupportAgentRoundedIcon/>,
        title: 'Dedicated Support',
        description:
            'Our team is here to help, providing reliable assistance to ensure you maximize the potential of our tools.',
    },
    {
        icon: <QueryStatsRoundedIcon/>,
        title: 'Unmatched Precision',
        description:
            'Experience in-depth analytics crafted for accuracy, delivering data you can trust to make informed decisions.',
    },
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={{
                pt: {xs: 4, sm: 12},
                pb: {xs: 8, sm: 16},
                color: 'white',
                bgcolor: 'grey.900',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: {xs: 3, sm: 6},
                }}
            >
                <Box
                    sx={{
                        width: {sm: '100%', md: '60%'},
                        textAlign: {sm: 'left', md: 'center'},
                    }}
                >
                    <Typography component="h2" variant="h4" gutterBottom>
                        Highlights
                    </Typography>
                    <Typography variant="body1" sx={{color: 'grey.400'}}>
                        Unleash the power of cutting-edge AI, crafted for traders and innovators. From effortless
                        accessibility to precision insights, FartnomicsAI is your ultimate companion in the dynamic
                        world of MemeCoins.

                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid size={{xs: 12, sm: 6, md: 4}} key={index}>
                            <Stack
                                direction="column"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    color: 'inherit',
                                    p: 3,
                                    height: '100%',
                                    borderColor: 'hsla(220, 25%, 25%, 0.3)',
                                    backgroundColor: 'grey.800',
                                }}
                            >
                                <Box sx={{opacity: '50%'}}>{item.icon}</Box>
                                <div>
                                    <Typography gutterBottom sx={{fontWeight: 'medium'}}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'grey.400'}}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
