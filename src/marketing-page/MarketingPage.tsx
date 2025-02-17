import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import LogoCollection from "./components/LogoCollection";
import Highlights from "./components/Highlights";
import FAQ from "./components/FAQ";

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme/>

            <AppAppBar/>
            <Hero/>
            <div>
                <LogoCollection/>
                <Features/>
                <Divider/>
                {/*<Testimonials/>*/}
                {/*<Divider/>*/}
                <Highlights/>
                <Divider/>
                <Pricing/>
                <Divider/>
                <FAQ/>
                <Divider/>
                <Footer/>
            </div>
        </AppTheme>
    );
}
