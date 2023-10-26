import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
import TuneIcon from '@mui/icons-material/Tune';
import {useSetRecoilState} from "recoil";
import {filterModalState} from "@/state/atoms/filterModal.atom";

const MDFButton = styled(Button)({
    color: 'white',
    textTransform: 'none',
})

const FilterButton = () => {
    const setFilterModalOpen = useSetRecoilState(filterModalState)
    return (
        <MDFButton startIcon={<TuneIcon/>} onClick={()=> setFilterModalOpen(true)}>
            Filter
        </MDFButton>
    )
}

export default FilterButton