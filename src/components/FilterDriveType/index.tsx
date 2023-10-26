import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {useRecoilState} from "recoil";
import {filterState} from "@/state/atoms/filter.atom";
import {ChangeEvent} from "react";


const FilterDriveType = () => {

    const [_, setFilter] = useRecoilState(filterState)
    const handleChange = (e: ChangeEvent<HTMLInputElement>, item: string) => {
        if (e.target.checked) {
            setFilter(f => ({
                ...f,
                driveType: [...f.driveType, item]
            }))
        } else {
            setFilter(f => ({
                ...f,
                driveType: f.driveType.filter((i) => i !== item)
            }))
        }
    }

    const driveTypes = ['AWD', 'FWD', 'RWD']
    return (
        <><Box sx={{
            width: '100%',
        }}>
            <Box sx={{
                fontWeight: 'bold',
            }}>DriveType</Box>
        </Box><Box>
            <Grid container spacing={0.5}>
                {
                    driveTypes.map((item, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '0.2rem',
                                fontSize: '0.8rem'
                            }}>
                                <FormControlLabel
                                    label={<Box sx={{
                                        fontSize: {
                                            xs: '0.6rem',
                                            md: '0.75rem'
                                        },
                                    }}>{item}</Box>}
                                    control={<Checkbox sx={{
                                        color: '#EF4444',
                                        '&.Mui-checked': {
                                            color: '#EF4444',
                                        }
                                    }} onChange={(e) => handleChange(e, item)}/>}/>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box></>
    )
}


export default FilterDriveType