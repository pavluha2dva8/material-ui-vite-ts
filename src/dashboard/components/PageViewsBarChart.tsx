import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {BarChart} from '@mui/x-charts/BarChart';
import {useTheme} from '@mui/material/styles';

export default function PageViewsBarChart() {
    const theme = useTheme();
    const colorPalette = [
        (theme.vars || theme).palette.primary.dark,
        (theme.vars || theme).palette.primary.main,
        (theme.vars || theme).palette.primary.light,
    ];
    return (
        <Card variant="outlined" sx={{width: '100%'}}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Global Token Visibility Across Platforms
                </Typography>
                <Stack sx={{justifyContent: 'space-between'}}>
                    <Stack
                        direction="row"
                        sx={{
                            alignContent: {xs: 'center', sm: 'flex-start'},
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Typography variant="h4" component="p">
                            24,807
                        </Typography>
                        <Chip size="small" color="error" label="-8%"/>
                    </Stack>
                    <Typography variant="caption" sx={{color: 'text.secondary'}}>
                        Activity and trends across all platforms, social media, web
                        searches, and community hubs</Typography>
                </Stack>
                <BarChart
                    borderRadius={8}
                    colors={colorPalette}
                    xAxis={
                        [
                            {
                                scaleType: 'band',
                                categoryGapRatio: 0.5,
                                data: ['Dec', 'Jan', 'Feb'],
                            },
                        ] as any
                    }
                    series={[
                        {
                            id: 'page-views',
                            label: 'Ticker',
                            data: [2234, 3872, 2998],
                            stack: 'A',
                        },
                        {
                            id: 'downloads',
                            label: 'CA',
                            data: [3098, 4215, 2384],
                            stack: 'A',
                        },
                        {
                            id: 'conversions',
                            label: 'Link',
                            data: [1693, 2038, 2275],
                            stack: 'A',
                        },
                    ]}
                    height={250}
                    margin={{left: 50, right: 0, top: 20, bottom: 20}}
                    grid={{horizontal: true}}
                    slotProps={{
                        legend: {
                            hidden: true,
                        },
                    }}
                />
            </CardContent>
        </Card>
    );
}
