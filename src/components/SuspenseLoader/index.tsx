import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import styled from "@mui/material/styles/styled";


const BorderLinearProgress = styled(LinearProgress)({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: 'rgba(239, 68, 68, 1)',
    },
})


const SuspenseLoader = () => {
    return (
        <BorderLinearProgress/>
    )
}

export default SuspenseLoader;