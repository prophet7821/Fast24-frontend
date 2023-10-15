import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import {searchModalState} from "@/state/atoms/searchModal.atom";
import {useRecoilState} from "recoil";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SvgIcon from "@mui/material/SvgIcon";
import MDFGradientText from "@/components/MDFGradientText";
import React, {useEffect} from "react";
import {debounceTime, distinctUntilChanged, filter, Subject} from "rxjs";
import {searchService} from "@/services/cars.service";
import {Car} from "@/types/car.type";
import {useRouter} from "next/navigation";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0,0,0,.2)',
    backdropFilter: 'blur(0.5rem)',
    borderRadius: '1rem',
    width: '50%',

};

const SearchModal = () => {
    const router = useRouter();
    const [open,setOpen] = useRecoilState(searchModalState);
    const [searchResult, setSearchResult] = React.useState<Car[]>([])
    const [searchTerm, setSearchTerm] = React.useState('');
    const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)
    const handleClose = () =>{
        setOpen(false)
        setSearchResult([])
        setSearchTerm('')
    }

    const searchInputRef = React.useRef(new Subject<string>())

    useEffect(() => {
        const subscription = searchInputRef.current.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            filter((value) => value.trim() !== '')
        ).subscribe(async (value) => {
            const result = await searchService(value, 0, 10)
            setSearchResult(result)
            setSearchTerm(value)
        })

        return () => subscription.unsubscribe()
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        searchInputRef.current.next(value)
        if (value === '') {
            setSearchResult([])
            setSearchTerm('')
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{
                    borderBottom: searchTerm === '' ? 'none' : '1px solid #ccc',
                }}>
                    <TextField
                        onChange={handleChange}
                        sx={{
                            width: '100%',
                            '& fieldset': {
                                border: 'none',
                            },
                        }} placeholder='Search' InputProps={{
                        startAdornment: (
                            <InputAdornment position={"start"}>
                                <SvgIcon viewBox="0 0 24 24">
                                    <defs>
                                        <linearGradient id="gradient-search" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#EF4444"/>
                                            <stop offset="100%" stopColor="#F59E0B"/>
                                        </linearGradient>
                                    </defs>
                                    <path
                                        fill="url(#gradient-search)"
                                        d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                </SvgIcon>
                            </InputAdornment>
                        ),
                        sx: {
                            color: 'white',
                            fontSize: {
                                xs: '0.8rem',
                                sm: '1.5rem',
                            },
                            fontWeight: 'bold',
                        }
                    }}/>
                </Box>

                <Box sx={{
                    maxHeight: '50vh',
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        width: '0.2rem',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#EF4444',
                        borderRadius: '1rem',
                    }
                }}>
                    {
                        searchTerm !== '' && (
                            <Box sx={{
                                p: 1
                            }}>
                                <Box
                                    onMouseEnter={() => setHoveredItem('search')}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onClick={() => {
                                        handleClose()
                                        router.push(`/cars?term=${searchTerm}`)
                                    }}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        fontSize: {
                                            xs: '0.6rem',
                                            md: '1rem',
                                        },
                                        fontWeight: 'bold',
                                        color: 'white',
                                        padding: '0.8rem',
                                        ':hover': {
                                            cursor: 'pointer',
                                            border: '1px solid #ef4444',
                                            borderRadius: '1rem',
                                            background: 'rgba(239,68,68,.1)',
                                        }
                                    }}>
                                    <Box>
                                        Search for&nbsp; &apos;<MDFGradientText sx={{
                                        textDecoration: 'underline',
                                        fontStyle: 'italic',
                                    }}>{searchTerm}</MDFGradientText>&apos;
                                    </Box>
                                    {hoveredItem === 'search' && <KeyboardReturnIcon/>}
                                </Box>
                                {
                                    searchResult.map((item: Car) => (
                                        <Box key={item._id}
                                             onClick={() => {
                                                 handleClose()
                                                 router.push(`/cars/${item._id}`)
                                             }}
                                             onMouseEnter={() => setHoveredItem(item._id)}
                                             onMouseLeave={() => setHoveredItem(null)}
                                             sx={{
                                                 display: 'flex',
                                                 justifyContent: 'space-between',
                                                 alignItems: 'center',
                                                 fontSize: {
                                                     xs: '0.6rem',
                                                     md: '1rem',
                                                 },
                                                 fontWeight: 'bold',
                                                 color: 'white',
                                                 padding: '0.8rem',
                                                 ':hover': {
                                                     cursor: 'pointer',
                                                     border: '1px solid #ef4444',
                                                     borderRadius: '1rem',
                                                     background: 'rgba(239,68,68,.1)',
                                                 }
                                             }}>

                                            <MDFGradientText>{item['name']}</MDFGradientText>
                                            {hoveredItem === item._id && <KeyboardReturnIcon/>}

                                        </Box>
                                    ))
                                }
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </Modal>
    )
}


export default SearchModal;