import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid from './CustomizedDataGrid';
import HighlightedCard from './HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard, {StatCardProps} from './StatCard';

const data: StatCardProps[] = [
    {
        title: 'Holders',
        value: '35k',
        interval: 'Last month',
        trend: 'up',
        data: [
            2934, 2122, 673, 860, 240, 380, 100, 240, 280, 889, 2140, 1822, 1433, 860, 340, 380,
            360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
        ],
    },
    {
        title: 'Trades',
        value: '348k',
        interval: 'Last month',
        trend: 'down',
        data: [
            16400, 12509, 9704, 11306, 7750, 5500, 3356, 1080, 2900, 4500, 920, 820, 840, 600, 820,
            1780, 2800, 2760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
        ],
    },
    {
        title: 'Suspicious Transactions',
        value: '16k',
        interval: 'Last month',
        trend: 'neutral',
        data: [
            500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
            520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
        ],
    },
];

export default function MainGrid() {
    return (
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
            {/* cards */}
            <Typography component="h2" variant="h6" sx={{mb: 2}}>
                Overview
            </Typography>
            <Grid
                container
                spacing={2}
                columns={12}
                sx={{mb: (theme) => theme.spacing(2)}}
            >
                {data.map((card, index) => (
                    <Grid key={index} size={{xs: 12, sm: 6, lg: 3}}>
                        <StatCard {...card} />
                    </Grid>
                ))}
                <Grid size={{xs: 12, sm: 6, lg: 3}}>
                    <HighlightedCard/>
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                    <SessionsChart/>
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                    <PageViewsBarChart/>
                </Grid>
            </Grid>
            <Typography component="h2" variant="h6" sx={{mb: 2}}>
                Details
            </Typography>
            <Grid container spacing={2} columns={12}>
                <Grid size={{xs: 12, lg: 9}}>
                    <CustomizedDataGrid/>
                </Grid>
                <Grid size={{xs: 12, lg: 3}}>
                    <Stack gap={2} direction={{xs: 'column', sm: 'row', lg: 'column'}}>
                        <CustomizedTreeView/>
                        <ChartUserByCountry/>
                    </Stack>
                </Grid>
            </Grid>
            <Copyright sx={{my: 4}}/>
        </Box>
    );
}
