import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from "@mui/lab";
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';


export default function experience() {
    return (<>
        <div id="experience" className="bg-blue-950 flex flex-row w-full top-0 h-fit py-4 justify-center">
            <div className="flex flex-col justify-center items-center px-4 py-2 w-full h-full text-white text-sm">
                <h1 className="text-5xl text-center py-4">Experience</h1>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            color="text.white"
                        >
                            Sept 2020 - Dec 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <SchoolIcon/>
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <p className='text-xl'>
                            Carleton University Bachelor of Computer Science
                        </p>
                        <p>GPA: 12.0/12.0</p>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        color="text.white"
                        >
                            Jan 2024 - May 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <HistoryEduRoundedIcon/>
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <p className='text-xl'>
                                Carleton University Teaching Assistant
                            </p>
                            <p>For COMP3804 (Design and Analysis of Algorithms I)</p>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            color="text.white"
                            >
                            May 2022 - September 2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <p className='text-xl'>
                                Frontend Developer Intern at Accedian
                            </p>
                        <p>Worked on Skylight Analytics</p>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    </>)
}