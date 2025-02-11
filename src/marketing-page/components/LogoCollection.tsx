import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useTheme} from '@mui/system';

const whiteLogos = [
    'src/img/fartcoin.png',
    'src/img/buttholecoin.png',
    'src/img/fartnomicscoin.png',
];

const darkLogos = [
    'src/img/fartcoin.png',
    'src/img/buttholecoin.png',
    'src/img/fartnomicscoin.png',
];

const logoStyle = {
    width: '300px',
    height: '70px',
    margin: '0 32px',
    opacity: 0.7,
};

export default function LogoCollection() {
    const theme = useTheme();
    const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

    return (
        <Box id="logoCollection" sx={{py: 4}}>
            <Typography
                component="p"
                variant="subtitle2"
                align="center"
                sx={{color: 'text.secondary'}}
            >
                Trusted by the best communities
            </Typography>
            <Grid container sx={{justifyContent: 'center', mt: 2, opacity: 0.6}}>
                {logos.map((logo, index) => (
                    <Grid item key={index}>
                        <img
                            src={logo}
                            alt={`Company number ${index + 1}`}
                            style={logoStyle}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
