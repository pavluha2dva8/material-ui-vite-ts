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
                <div id="features">
                    <Features/>
                </div>
                <Divider/>
                <div id="highlights">
                    <Highlights/>
                </div>
                <Divider/>
                <div id="pricing">
                    <Pricing/>
                </div>
                <Divider/>
                <div id="faq">
                    <FAQ/>
                </div>
                <Divider/>
                    <Footer/>
                </div>
        </AppTheme>
);
}
