import Box from "@mui/material/Box";
import {useRecoilState} from "recoil";
import {filterState} from "@/state/atoms/filter.atom";
import MDFSlider from "@/components/MDFSlider";
import {Fast24ThumbComponent} from "@/components/MDFSliderThumb";
import FilterTextfield from "@/components/FilterTextfield";
import Divider from '@mui/material/Divider'

const PriceSlider = () => {
    const [filter, setFilter] = useRecoilState(filterState)
    const handleChange = (event: Event, newValue: number | number[]) => {
        let [min, max] = newValue as number[];
        setFilter(f => ({
            ...f,
            price: {
                min,
                max,
            },
        }))
    }

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(f => ({
            ...f,
            price: {
                ...f['price'],
                min: isNaN(Number(event.target.value)) ? 0 : Number(event.target.value),
            },
        }))
    }


    const handleMinBlur = () => {
        if (filter['price']['min'] < 0) {
            setFilter(f => ({
                ...f,
                price: {
                    ...f['price'],
                    min: 0,
                },
            }));
        } else if (filter['price']['min'] > 50000000) {
            setFilter(f => ({
                ...f,
                price: {
                    ...f['price'],
                    min: 50000000,
                },
            }));
        }
    }


    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(f => ({
            ...f,
            price: {
                ...f['price'],
                max: isNaN(Number(event.target.value)) ? 0 : Number(event.target.value),
            },
        }));
    }

    const handleMaxBlur = () => {
        if (filter['price']['max'] < 0) {
            setFilter(f => ({
                ...f,
                price: {
                    ...f['price'],
                    max: 0,
                },
            }));
        } else if (filter['price']['max'] > 50000000) {
            setFilter(f => ({
                ...f,
                price: {
                    ...f['price'],
                    max: 50000000,
                },
            }));
        }
    }

    return (
        <>
            <Box sx={{
                width: '100%',
            }}>
                <Box sx={{
                    fontWeight: 'bold',
                }}>Price</Box>
            </Box>
            <Box>
                <MDFSlider min={0} max={50000000} step={1} value={[filter['price']['min'], filter['price']['max']]}
                           onChange={handleChange} slots={{thumb: Fast24ThumbComponent}}/>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <FilterTextfield variant={"outlined"} label={<Box>Minimum</Box>} value={filter['price']['min']}
                                     size={'small'}
                                     onChange={handleMinChange}
                                     onBlur={handleMinBlur}

                    />
                </Box>
                <Box sx={{
                    width: {
                        xs: '0px',
                        md: '20px'
                    }
                }}>
                    <Divider sx={{
                        backgroundColor: '#9e9e9e'
                    }}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <FilterTextfield variant={"outlined"} label={<Box>Maximum</Box>} value={filter['price']['max']}
                                     size={'small'}
                                     onChange={handleMaxChange}
                                     onBlur={handleMaxBlur}
                    />
                </Box>
            </Box>
        </>
    )
}

export default PriceSlider