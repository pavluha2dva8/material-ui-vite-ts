import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
    {
        title: 'Scout',
        price: '0',
        description: [
            'Access basic tools for tracking MemeCoin trends and market alerts.',
            'Monitor key market behaviors with limited AI analysis.',
            'Receive essential support through our help center.',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
    },
    {
        title: 'Trench Warrior',
        subheader: 'Recommended',
        price: '9.99',
        description: [
            'Gain access to advanced analytics and trend tracking tools.',
            'Unlock deeper insights into whale activities and suspicious patterns.',
            'Get priority email support and access to our dedicated team.',
            'Take advantage of exclusive market deals and tailored alerts.',
        ],
        buttonText: 'Start now',
        buttonVariant: 'contained',
        buttonColor: 'secondary',
    },
    {
        title: 'Cabal',
        price: '29.99',
        description: [
            'Unlock full access to premium AI-powered trade analysis.',
            'Monitor whale and sniper activities in real-time for enhanced decision-making.',
            'Get personalized alerts and dedicated support via phone and email.',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
    },
];

export default function Pricing() {
    return (
        <Container
            id="pricing"
            sx={{
                pt: {xs: 4, sm: 12},
                pb: {xs: 8, sm: 16},
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
                <Typography
                    component="h2"
                    variant="h4"
                    gutterBottom
                    sx={{color: 'text.primary'}}
                >
                    Pricing
                </Typography>
                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                    Choose a plan that fits your needs and unlock the full potential of FartnomicsAI. Whether you’re
                    just starting or ready to dive deep into advanced features, we have a solution for every type of
                    user. From free access to premium insights, find the plan that suits your journey in the MemeCoin
                    ecosystem.
                </Typography>
            </Box>
            <Grid
                container
                spacing={3}
                sx={{alignItems: 'center', justifyContent: 'center', width: '100%'}}
            >
                {tiers.map((tier) => (
                    <Grid
                        size={{xs: 12, sm: tier.title === 'Enterprise' ? 12 : 6, md: 4}}
                        key={tier.title}
                    >
                        <Card
                            sx={[
                                {
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 4,
                                },
                                tier.title === 'Professional' &&
                                ((theme) => ({
                                    border: 'none',
                                    background:
                                        'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                                    boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                                    ...theme.applyStyles('dark', {
                                        background:
                                            'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                                        boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                                    }),
                                })),
                            ]}
                        >
                            <CardContent>
                                <Box
                                    sx={[
                                        {
                                            mb: 1,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            gap: 2,
                                        },
                                        tier.title === 'Professional'
                                            ? {color: 'grey.100'}
                                            : {color: ''},
                                    ]}
                                >
                                    <Typography component="h3" variant="h6">
                                        {tier.title}
                                    </Typography>
                                    {tier.title === 'Professional' && (
                                        <Chip icon={<AutoAwesomeIcon/>} label={tier.subheader}/>
                                    )}
                                </Box>
                                <Box
                                    sx={[
                                        {
                                            display: 'flex',
                                            alignItems: 'baseline',
                                        },
                                        tier.title === 'Professional'
                                            ? {color: 'grey.50'}
                                            : {color: null},
                                    ]}
                                >
                                    <Typography component="h3" variant="h2">
                                        ${tier.price}
                                    </Typography>
                                    <Typography component="h3" variant="h6">
                                        &nbsp;/ month
                                    </Typography>
                                </Box>
                                <Divider sx={{my: 2, opacity: 0.8, borderColor: 'divider'}}/>
                                {tier.description.map((line) => (
                                    <Box
                                        key={line}
                                        sx={{py: 1, display: 'flex', gap: 1.5, alignItems: 'center'}}
                                    >
                                        <CheckCircleRoundedIcon
                                            sx={[
                                                {
                                                    width: 20,
                                                },
                                                tier.title === 'Professional'
                                                    ? {color: 'primary.light'}
                                                    : {color: 'primary.main'},
                                            ]}
                                        />
                                        <Typography
                                            variant="subtitle2"
                                            component={'span'}
                                            sx={[
                                                tier.title === 'Professional'
                                                    ? {color: 'grey.50'}
                                                    : {color: null},
                                            ]}
                                        >
                                            {line}
                                        </Typography>
                                    </Box>
                                ))}
                            </CardContent>
                            <CardActions>
                                <Button
                                    fullWidth
                                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                                    color={tier.buttonColor as 'primary' | 'secondary'}
                                >
                                    {tier.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
