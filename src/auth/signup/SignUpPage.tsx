import * as React from "react";
import {useState} from "react";
import {useSnackbar} from "notistack";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../../shared-theme/AppTheme";
import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations,
    treeViewCustomizations,
} from "../../dashboard/theme/customizations";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {useNavigate} from "react-router-dom";
import theme from "../../theme";

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};

export default function SignUpPage(props: { disableCustomTheme?: boolean }) {
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSignIn = () => {
        navigate("/sign-in");
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignUp = () => {
        if (!validateEmail(email)) {
            enqueueSnackbar("Invalid email address", {variant: "error"});
            return;
        }
        if (pass.length < 8) {
            enqueueSnackbar("Password must be at least 8 characters long", {variant: "error"});
            return;
        }
        enqueueSnackbar("Invalid invite code", {variant: "error"});
    };

    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme/>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    py: "20rem",
                    flexDirection: "column",
                    height: "100vh",
                    gap: "2rem",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        display: "flex",
                        flexDirection: {xs: "column", sm: "row"},
                        alignItems: "center",
                        fontSize: "clamp(2rem, 10vw, 2.5rem)",
                    }}
                >
                    <Typography
                        component="span"
                        variant="h1"
                        sx={(theme) => ({
                            fontSize: "inherit",
                            color: "primary.main",
                            ...theme.applyStyles("dark", {
                                color: "primary.light",
                            }),
                        })}
                    >
                        FartnomicsAI
                    </Typography>
                </Typography>
                <Box
                    sx={(theme) => ({
                        display: "flex",
                        alignItems: "start",
                        flexDirection: "column",
                        width: "450px",
                        p: "40px",
                        borderRadius: "10px",
                        backgroundColor: "#d9d9d9",
                        ...theme.applyStyles("dark", {
                            backgroundColor: theme.palette.background.default,
                        }),
                    })}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: "1.2rem",
                                mb: "0.5rem",
                            }}
                        >
                            Sign up
                        </Typography>
                        <Box sx={{display: "flex"}}>
                            <Typography
                                variant="body2"
                                color={theme.palette.info.main}
                                sx={{
                                    mr: "0.3rem",
                                }}
                            >
                                or
                            </Typography>
                            <Link
                                href="#"
                                variant="body2"
                                color={theme.palette.primary.main}
                                onClick={handleSignIn}
                            >
                                Sign in
                            </Link>
                        </Box>
                    </Box>

                    <TextField
                        margin="dense"
                        placeholder="Email Address"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        placeholder="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <TextField margin="dense" placeholder="Invite Code" type="text" fullWidth variant="outlined"
                               sx={{
                                   mb: "1rem",
                               }}/>

                    <Button color="secondary" variant="contained" size="small" fullWidth onClick={handleSignUp}>
                        Sign up
                    </Button>
                </Box>
            </Box>
        </AppTheme>
    );
}
