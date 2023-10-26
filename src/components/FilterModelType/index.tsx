import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {useRecoilState} from "recoil";
import {ChangeEvent} from "react";
import {filterState} from "@/state/atoms/filter.atom";

const FilterModelType = () => {

    const ModelType = [
        "GT CARS",
        "MODERN MUSCLE",
        "HYPERCARS",
        "MODERN SUPERCARS",
        "CLASSIC SPORTS CARS",
        "SUPER GT",
        "CULT CLASSICS",
        "MODERN SPORTS CARS",
        "CLASSIC RALLY",
        "HOT HATCH",
        "SUPER HOT HATCH",
        "CULT CARS",
        "RETRO SPORTS CARS",
        "UTV'S",
        "VINTAGE RACERS",
        "BUGGIES",
        "RALLY MONSTERS",
        "EXTREME TRACK TOYS",
        "SPORTS UTILITY HEROES",
        "TRUCKS",
        "RETRO RALLY",
        "PICK-UP & 4X4'S",
        "UNLIMITED OFFROAD",
        "RETRO SALOONS",
        "RETRO MUSCLE",
        "MODERN RALLY",
        "CLASSIC MUSCLE",
        "RARE CLASSICS",
        "TRACK TOYS",
        "RETRO SUPERCARS",
        "SUPER SALOONS",
        "DRIFT CARS",
        "RODS AND CUSTOMS",
        "CLASSIC RACERS",
        "UNLIMITED BUGGIES",
        "OFFROAD",
        "RETRO HOT HATCH",
        "VANS AND UTILITY"
    ];


    const [filter, setFilter] = useRecoilState(filterState)


    const handleChange = (e: ChangeEvent<HTMLInputElement>, item: string) => {
        if (e.target.checked) {
            setFilter(f=>({
                ...f,
                modelType: [...f.modelType, item]
            }))
        } else {
            setFilter(f=>({
                ...f,
                modelType: f.modelType.filter((i) => i !== item)
            }))
        }
    }


    return (
        <><Box sx={{
            width: '100%',
        }}>
            <Box sx={{
                fontWeight: 'bold',
            }}>ModelType</Box>
        </Box><Box>
            <Grid container spacing={0.5}>
                {ModelType.map((item, index) => (
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
                                }} onChange={(e)=> handleChange(e,item)}/>}/>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box></>
    )
}


export default FilterModelType