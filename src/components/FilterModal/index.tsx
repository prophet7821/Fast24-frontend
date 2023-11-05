"use client"
import Modal from '@mui/material/Modal'
import {useRecoilState, useRecoilValue} from 'recoil'
import Box from '@mui/material/Box'
import {filterModalState} from '@/state/atoms/filterModal.atom'
import Divider from '@mui/material/Divider'
import PriceSlider from '@/components/PriceSlider'
import FilterStockSpecs from "@/components/FilterStockSpecs";
import FilterDriveType from "@/components/FilterDriveType";
import FilterModelType from "@/components/FilterModelType";
import FilterPerformance from "@/components/FilterPerformance";
import MDFContainedBox from "@/components/MDFContainedBox";
import Button from '@mui/material/Button'
import {filterState} from "@/state/atoms/filter.atom";
import {Filter} from "@/types/filter.type";
import {useRouter} from 'next/navigation'
import {defaultFilterState} from "@/state/atoms/defaultFilter.atom";

const FilterModal = () => {
    const router = useRouter();
    const [filterModalOpen, setFilterModalOpen] = useRecoilState(filterModalState)
    const [filter, setFilter] = useRecoilState(filterState)
    const defaultFilter = useRecoilValue(defaultFilterState)

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0,0,0,.2)',
        backdropFilter: 'blur(0.5rem)',
        borderRadius: '1rem',
        width: {
            xs: '90%',
            sm: '60%',
            md: '50%',
        },
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
    };


    const handleClose = () => {
        setFilterModalOpen(false)
    }


    const serializeURL = (filter: Filter) => {
        const params = new URLSearchParams();

        Object.entries(filter).forEach(([key, value]) => {
            if (typeof value === 'object' && !Array.isArray(value)) {
                // If the value is an object, iterate over its properties
                Object.entries(value).forEach(([subKey, subValue]) => {
                    if (subValue !== defaultFilter[key][subKey]) {
                        // Only append the subValue if it differs from the default value
                        params.append(`${key}_${subKey}`, subValue as string);
                    }
                });
            } else if (Array.isArray(value)) {
                // If the value is an array, join its elements into a comma-separated string
                if (value.length > 0) {
                    params.append(key, value.join(','));
                }

            } else {
                // Otherwise, just append the value as-is
                if (value.toString() !== '') {
                    params.append(key, value.toString());
                }
            }
        });

        return params.toString();
    }


    const handleSubmit = () => {
        const resolvedURL = serializeURL(filter)
        router.push('/cars?' + resolvedURL)
        handleClose()
    }


    return (
        <Modal
            open={filterModalOpen}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Box sx={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '0.6rem 0.6rem 0 0.6rem',
                }}>
                    Filter
                </Box>


                <Box sx={{
                    width: '100%',
                }}>
                    <Divider sx={{
                        backgroundColor: '#9e9e9e'
                    }}/>
                </Box>


                <Box sx={{
                    p: 3,
                    boxSizing: 'border-box',
                    width: '100%',
                    maxHeight: '40vh',
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        width: '0.2rem',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#EF4444',
                        borderRadius: '1rem',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}>


                    {/*Price*/}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                    }}>
                        <PriceSlider/>
                    </Box>

                    {/*StockSpecs*/}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                    }}>
                        <FilterStockSpecs/>
                    </Box>


                    {/* DriveType */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                    }}>
                        <FilterDriveType/>
                    </Box>


                    {/*Performance*/}

                    <Box>
                        <FilterPerformance/>
                    </Box>

                    {/* ModelType */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                    }}>
                        <FilterModelType/>
                    </Box>
                </Box>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    boxSizing: 'border-box',
                    p: 1
                }}>
                    <MDFContainedBox>
                        <Button onClick={handleSubmit} sx={{
                            textTransform: 'none',
                            color: 'white'
                        }}>
                            Apply
                        </Button>
                    </MDFContainedBox>
                </Box>
            </Box>
        </Modal>
    )
}


export default FilterModal;