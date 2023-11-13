import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";

export default function MDFCircularProgress(props: CircularProgressProps) {
    return (
        <Box sx={{position: 'relative'}}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: 'rgba(239,68,68,0.1)',
                }}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                    color:
                        'rgba(239,68,68,0.9)',
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                thickness={4}
                {...props}
            />
        </Box>
    );
}