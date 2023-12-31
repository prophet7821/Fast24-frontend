import Box from "@mui/material/Box";

const ModelTypeBadge = ({ modelType }: { modelType: string }) => {
    return (
        <Box sx={{
            color: 'white',
            fontSize: '0.5rem',
            fontWeight: 'bold',
            borderRadius: '0.5rem',
            padding: '0.5rem',
            border: '1px solid #ef4444',
            background: 'rgba(239,68,68,.1)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }}>
            {modelType}
        </Box>
    )
}


export default ModelTypeBadge