import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SpecBadge from "@/components/SpecBadge";
import {useRecoilState} from "recoil";
import {filterState} from "@/state/atoms/filter.atom";

const FilterStockSpecs = () => {
    const specs = ['S2', 'S1', 'A', 'B', 'C', 'D']
    const [filter, setFilter] = useRecoilState(filterState)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, spec: string) => {
        if (event.target.checked) {
            setFilter(f => ({
                ...f,
                stockSpecs: [...f.stockSpecs, spec]
            }))
        } else {
            setFilter(f => ({
                ...f,
                stockSpecs: f.stockSpecs.filter(s => s !== spec)
            }))
        }
    }
    return (
        <><Box sx={{
            width: '100%',
        }}>
            <Box sx={{
                fontWeight: 'bold',
            }}>StockSpecs</Box>
        </Box><Box>
            <Grid container spacing={0.5}>
                {specs.map((spec, index) => (
                    <Grid key={index} item xs={6} sm={4} md={3}>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '0.2rem',
                            fontSize: '0.8rem'
                        }}>
                            <FormControlLabel
                                label={<SpecBadge stockSpecs={spec} stockRating={'XXX'}/>}
                                control={<Checkbox checked={filter['stockSpecs'].includes(spec)} sx={{
                                    color: '#EF4444',
                                    '&.Mui-checked': {
                                        color: '#EF4444',
                                    }
                                }} onChange={(e) => handleChange(e, spec)}/>}/>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box></>
    )
}

export default FilterStockSpecs
