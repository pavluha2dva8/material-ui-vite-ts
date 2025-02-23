import * as React from 'react';
import {useState} from 'react';
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../../shared-theme/AppTheme";

import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations,
    treeViewCustomizations
} from "../../dashboard/theme/customizations";
import Box from "@mui/material/Box";
import theme from "../../theme";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {enqueueSnackbar} from "notistack";

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};

export default function ForgotPassword(props: { disableCustomTheme?: boolean }) {
    const [email, setEmail] = useState("");

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignUp = () => {
        if (!validateEmail(email)) {
            enqueueSnackbar("Invalid email address", {variant: "error"});
            return;
        }
        enqueueSnackbar("Verification email has been sent.", {variant: "success"});
    };
    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme/>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                py: '20rem',
                flexDirection: 'column',
                height: "100vh",
                gap: "2rem"
            }}>
                <Typography
                    variant="h1"
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'row'},
                        alignItems: 'center',
                        fontSize: 'clamp(2rem, 10vw, 2.5rem)',
                    }}
                >
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
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '1rem',
                        width: '450px',
                        p: '40px',
                        borderRadius: '10px',
                        backgroundColor: '#d9d9d9',
                        ...theme.applyStyles('dark', {
                            backgroundColor: theme.palette.background.default
                        }),
                    })}
                >
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Typography
                            variant="h1"
                            sx={{
                                alignItems: 'start',
                                fontSize: '1.2rem',
                                mb: '0.4rem'
                            }}
                        >Forgot your password?
                        </Typography>
                        <Typography
                            variant="body2"
                            color={theme.palette.info.main}
                            sx={{
                                alignItems: 'start',
                                fontSize: '0.8rem',
                            }}
                        >Enter your email and we'll send you a reset link.
                        </Typography>
                    </Box>


                    <TextField margin="dense"
                               placeholder="Email Address"
                               type="email"
                               fullWidth
                               variant='outlined'
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button color="secondary" variant='contained' size="small" fullWidth onClick={handleSignUp}>
                        Send reset link
                    </Button>
                </Box>
            </Box>


        </AppTheme>
    );
}
