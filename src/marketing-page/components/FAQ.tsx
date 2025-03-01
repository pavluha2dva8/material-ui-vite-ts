import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
    const [expanded, setExpanded] = React.useState<string[]>([]);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(
                isExpanded
                    ? [...expanded, panel]
                    : expanded.filter((item) => item !== panel),
            );
        };

    return (
        <Container
            id="faq"
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
            <Typography
                component="h2"
                variant="h4"
                sx={{
                    color: 'text.primary',
                    width: {sm: '100%', md: '60%'},
                    textAlign: {sm: 'left', md: 'center'},
                }}
            >
                Frequently asked questions
            </Typography>
            <Box sx={{width: '100%'}}>
                <Accordion
                    expanded={expanded.includes('panel1')}
                    onChange={handleChange('panel1')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography component="span" variant="subtitle2">
                            How do I contact customer support if I have a question or issue?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{maxWidth: {sm: '100%', md: '70%'}}}
                        >
                            You can reach our customer support team by emailing&nbsp;
                            <Link href="mailto:support@email.com">support@fnai.tech</Link>. We&apos;re here to assist
                            you
                            promptly.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded.includes('panel2')}
                    onChange={handleChange('panel2')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                    >
                        <Typography component="span" variant="subtitle2">
                            Can I refund if product doesn&apos;t meet my expectations?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{maxWidth: {sm: '100%', md: '70%'}}}
                        >
                            Absolutely! We offer a hassle-free return policy. If you&apos;re not
                            completely satisfied, you can return the product within 3 days for a full refund.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded.includes('panel3')}
                    onChange={handleChange('panel3')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                    >
                        <Typography component="span" variant="subtitle2">
                            What will happen with the developer tokens?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{maxWidth: {sm: '100%', md: '70%'}}}
                        >
                            Developer tokens will be subject to a lock-up period to ensure long-term stability and trust
                            within the community. After the lock-up period, they will be distributed gradually based on
                            project milestones and contributions. This ensures the team's continued commitment to the
                            project and its growth.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded.includes('panel4')}
                    onChange={handleChange('panel4')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel4d-content"
                        id="panel4d-header"
                    >
                        <Typography component="span" variant="subtitle2">
                            What features are in development for FartnomicsAI?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{maxWidth: {sm: '100%', md: '70%'}}}
                        >
                            We are actively developing several exciting features, including our DexSwap platform, which
                            will allow for seamless swapping of MemeCoins with minimal fees. Additionally, our Staking
                            platform will provide users with opportunities to earn rewards by staking their tokens.
                            Moreover, we're building the MemeCoinLaunch platform, which will offer the lowest fees on
                            the market, ensuring an affordable and efficient launch experience for new Meme
                            projects.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}
