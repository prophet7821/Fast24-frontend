import Grid from "@mui/material/Grid";
import MDFSlider from "@/components/MDFSlider";
import {useRecoilState} from "recoil";
import {filterState} from "@/state/atoms/filter.atom";
import {Fast24ThumbComponent} from "@/components/MDFSliderThumb";
import Box from "@mui/material/Box";
import MDFGradientText from "@/components/MDFGradientText";

const FilterPerformance = () => {
    const [filter, setFilter] = useRecoilState(filterState)
    const handleSpeedChange = (event: Event, newValue: number | number[]) => {
        let [min, max] = newValue as number[];
        setFilter(f => ({
            ...f,
            speed: {
                min,
                max,
            },
        }))
    }

    const handleHandlingChange = (event: Event, newValue: number | number[]) => {
        let [min, max] = newValue as number[];
        setFilter(f => ({
            ...f,
            handling: {
                min,
                max,
            },
        }))
    }

    const handleAccelerationChange = (event: Event, newValue: number | number[]) => {
        let [min, max] = newValue as number[];
        setFilter(f => ({
            ...f,
            acceleration: {
                min,
                max,
            },
        }))
    }

    const handleLaunchChange = (event: Event, newValue: number | number[]) => {
        let [min, max] = newValue as number[];
        setFilter(f => ({
            ...f,
            launch: {
                min,
                max,
            },
        }))
    }

    const handleBrakingChange = (event: Event, newValue: number | number[]) => {
        let [min, max] = newValue as number[];
        setFilter(f => ({
            ...f,
            braking: {
                min,
                max,
            },
        }))
    }

    const handleOffroadChange = (event: Event, newValue: number | number[]) => {
        let [min, max] = newValue as number[];
        setFilter(f => ({
            ...f,
            offroad: {
                min,
                max,
            },
        }))

        console.log(filter)
    }


    return (

        <><Box sx={{
            width: '100%',
            mb: 3
        }}>
            <Box sx={{
                fontWeight: 'bold',
            }}><MDFGradientText>Performance</MDFGradientText></Box>
        </Box><Grid container spacing={0.5}>
            <Grid item xs={6}>
                <Box sx={{
                    px: 3
                }}>
                    <Box sx={{
                        fontWeight: 'bold',
                    }}>Speed</Box>
                    <MDFSlider min={0} step={0.1} max={10} value={[filter['speed']['min'], filter['speed']['max']]}
                               slots={{thumb: Fast24ThumbComponent}} valueLabelDisplay={'auto'}
                               onChange={handleSpeedChange}/>
                </Box>

            </Grid>
            <Grid item xs={6}>
                <Box sx={{
                    px: 3
                }}>
                    <Box sx={{
                        fontWeight: 'bold',
                    }}>Handling</Box>
                    <MDFSlider min={0} step={0.1} max={10}
                               value={[filter['handling']['min'], filter['handling']['max']]}
                               slots={{thumb: Fast24ThumbComponent}} valueLabelDisplay={'auto'}
                               onChange={handleHandlingChange}/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{
                    px: 3
                }}>
                    <Box sx={{
                        fontWeight: 'bold',
                    }}>Acceleration</Box>
                    <MDFSlider min={0} step={0.1} max={10}
                               value={[filter['acceleration']['min'], filter['acceleration']['max']]}
                               slots={{thumb: Fast24ThumbComponent}} valueLabelDisplay={'auto'}
                               onChange={handleAccelerationChange}/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{
                    px: 3
                }}>
                    <Box sx={{
                        fontWeight: 'bold',
                    }}>Launch</Box>
                    <MDFSlider min={0} step={0.1} max={10}
                               value={[filter['launch']['min'], filter['launch']['max']]}
                               slots={{thumb: Fast24ThumbComponent}} valueLabelDisplay={'auto'}
                               onChange={handleLaunchChange}/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{
                    px: 3
                }}>
                    <Box sx={{
                        fontWeight: 'bold',
                    }}>Braking</Box>
                    <MDFSlider min={0} step={0.1} max={10}
                               value={[filter['braking']['min'], filter['braking']['max']]}
                               slots={{thumb: Fast24ThumbComponent}} valueLabelDisplay={'auto'}
                               onChange={handleBrakingChange}/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{
                    px: 3
                }}>
                    <Box sx={{
                        fontWeight: 'bold',
                    }}>OffRoad</Box>
                    <MDFSlider min={0} step={0.1} max={10}
                               value={[filter['offroad']['min'], filter['offroad']['max']]}
                               slots={{thumb: Fast24ThumbComponent}} valueLabelDisplay={'auto'}
                               onChange={handleOffroadChange}/>
                </Box>
            </Grid>
        </Grid></>
    )
}

export default FilterPerformance