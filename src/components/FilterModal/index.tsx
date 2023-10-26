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

const FilterModal = () => {

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

    const [filterModalOpen, setFilterModalOpen] = useRecoilState(filterModalState)
    const filter = useRecoilValue(filterState)
    const handleClose = () => {
        setFilterModalOpen(false)
    }

    const handleSubmit = () => {
        console.log(filter)
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