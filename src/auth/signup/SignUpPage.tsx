import * as React from 'react';
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../../shared-theme/AppTheme";

import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations, treeViewCustomizations
} from "../../dashboard/theme/customizations";
import Box from "@mui/material/Box";
import theme from "../../theme";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {useNavigate} from "react-router-dom";

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};

export default function SignUpPage(props: { disableCustomTheme?: boolean }) {

    const navigate = useNavigate();

    const handleSignIn= () => {
        navigate('/sign-in');
    };

    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: 'flex', alignItems: 'center',py:'20rem' , flexDirection:'column', height:"100vh", gap:"2rem" }}>
                <Typography
                    variant="h1"
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'row'},
                        alignItems: 'center',
                        fontSize: 'clamp(2rem, 10vw, 2.5rem)',
                    }}
                >
                    Discover&nbsp;
                    {/*&nbsp;latest&nbsp;*/}
                    <Typography
                        component="span"
                        variant="h1"
                        sx={(theme) => ({
                            fontSize: 'inherit',
                            color: 'primary.main',
                            ...theme.applyStyles('dark', {
                                color: 'primary.light',
                            }),
                        })}
                    >
                        FartnomicsAI
                    </Typography>
                    </Typography>
                <Box
                    sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'start',
                        flexDirection:'column',
                        width: '450px',
                        p:'40px',
                        borderRadius:'10px',
                        backgroundColor: '#d9d9d9',
                        ...theme.applyStyles('dark', {
                            backgroundColor: theme.palette.background.default
                        }),
                    })}>
                    <Box  sx={{ display: 'flex',justifyContent:'space-between', width:'100%', alignItems: 'center' }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: '1.2rem',
                                mb:'0.5rem'
                            }}
                        >Sign up
                        </Typography>
                        <Box  sx={{ display: 'flex', }}>
                            <Typography
                                variant="body2"
                                color={theme.palette.info.main}
                                sx={{

                                    mr:'0.3rem'
                                }}

                            >or
                            </Typography>
                            <Link href="#" variant="body2" color={theme.palette.primary.main} onClick={handleSignIn}>Sign in</Link>
                        </Box>

                    </Box>

                <TextField margin="dense"
                           placeholder="Full Name"
                           type="text"
                           fullWidth
                           variant='outlined'
                           />
                    <TextField margin="dense"
                               placeholder="Email Address"
                               type="email"
                               fullWidth
                               variant='outlined'
                    />
                <TextField
                    margin="dense"
                    placeholder="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    sx={{
                        mb:'1rem'
                    }}/>
                    <Button color="secondary" variant='contained' size="small" fullWidth >
                        Sign up
                    </Button>
            </Box>
            </Box>


</AppTheme>
    );
}
