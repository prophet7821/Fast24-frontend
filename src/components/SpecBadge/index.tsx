import Box from "@mui/material/Box";

const SpecBadge = ({stockSpecs, stockRating}: {
    stockSpecs: string,
    stockRating: number | string
}) => {
    const colorCodes: {
        [key: string]: string
    } = {
        D: '#5df3ff',
        C: '#ffe800',
        B: '#ff5815',
        A: '#ff006d',
        S1: '#f758ff',
        S2: '#1a4dff',
    }
    return <Box sx={{
        padding: '0.1rem',
        background: 'rgb(255,255,255)',
        borderRadius: '0.5rem',
    }}>
        <Box
            sx={{alignItems: 'center', background: colorCodes[stockSpecs], borderRadius: '0.5rem', display: 'flex', padding: '0.1rem 0.15rem',}}>
            <Box sx={{
                fontSize: {
                    xs: '0.8rem'
                },
                fontWeight: 'bold',
                color: 'rgb(255,255,255)',
                margin: '0 0.1rem',
            }}>{stockSpecs}</Box>

            <Box sx={{
                display: 'flex',
                fontWeight: 'bold',
                fontSize: {
                    xs: '0.8rem',
                },
                background: 'rgb(255,255,255)',
                borderRadius: '0 0.5rem 0.5rem 0',
                padding: '0.2rem',
                color: '#000'
            }}>
                {stockRating}
            </Box>
        </Box>
    </Box>
}


export default SpecBadge