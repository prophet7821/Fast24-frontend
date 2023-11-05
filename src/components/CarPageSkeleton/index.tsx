"use client"
import {useQuery} from "@tanstack/react-query";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CarCard from "@/components/CarCard";
import MDFContainedBox from "@/components/MDFContainedBox";
import FilterButton from "@/components/FilterButton";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {filterState} from "@/state/atoms/filter.atom";
import {defaultFilterState} from "@/state/atoms/defaultFilter.atom";
import {Filter} from "@/types/filter.type";
import {filterService} from "@/services/cars.service";


const CarsPageSkeleton = ({searchParams}: {
    searchParams: { [key: string]: string | string[] }
}) => {


    const setFilter = useSetRecoilState(filterState)
    const defaultFilter = useRecoilValue(defaultFilterState)

    const deserializeURL = (searchParams: { [key: string]: string }) => {
        const filter: Partial<Filter> = {};


        const parseValue = (value: string, defaultValue: any): any => {
            if (typeof defaultValue === 'number') {
                return parseFloat(value);
            } else if (typeof defaultValue === 'boolean') {
                return value.toLowerCase() === 'true';
            }
            return value;
        };

        Object.entries(searchParams).forEach(([key, value]) => {
            if (key.includes('_')) {
                const [parentKey, subKey] = key.split('_');
                const defaultValue = defaultFilter[parentKey][subKey];
                if (filter[parentKey]) {
                    filter[parentKey][subKey] = parseValue(value as string, defaultValue);
                } else {
                    filter[parentKey] = {
                        [subKey]: parseValue(value as string, defaultValue)
                    };
                }
            } else if (value.includes(',') || Array.isArray(defaultFilter[key])) {
                filter[key] = value.split(',');
            } else {
                const defaultValue = defaultFilter[key];
                filter[key] = parseValue(value, defaultValue);
            }
        });

        Object.keys(defaultFilter).forEach(key => {
            if (!filter[key]) {
                filter[key] = defaultFilter[key];
            } else if (typeof defaultFilter[key] === 'object' && !Array.isArray(defaultFilter[key])) {
                Object.keys(defaultFilter[key]).forEach(subKey => {
                    if (!filter[key][subKey]) {
                        filter[key][subKey] = defaultFilter[key][subKey];
                    }
                });
            }
        });

        return filter as Filter;
    };


    const {
        data,
        isLoading,
        isError,
    } = useQuery({
        queryKey: [searchParams],
        queryFn: () => {
            const deserializedFilter = deserializeURL(searchParams as { [key: string]: string })
            setFilter(deserializedFilter)
            return filterService(deserializedFilter)
        }
    })


    if (isLoading) return <div>Loading...</div>
    if (isError) {
        return (<div>Error...</div>)
    }

    return (
        <Container maxWidth={'lg'} sx={{
            color: 'white',
            padding: '2rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box sx={{
                    fontSize: {
                        xs: '1rem',
                        md: '1.5rem',
                    },
                    fontWeight: 'bold',
                }}>
                    Returned {data?.length} results
                </Box>
                {/*Filter Button*/}

                <MDFContainedBox>
                    <FilterButton/>
                </MDFContainedBox>
            </Box>

            <Box sx={{
                width: '100%',
            }}>
                <Divider sx={{
                    backgroundColor: '#9e9e9e'
                }}/>
            </Box>

            <Box sx={{
                width: '100%',
            }}>
                <Grid container spacing={2}>
                    {
                        data?.map((car: any) => (
                            <Grid key={car['_id']} item xs={6} md={4} lg={3}>
                                <CarCard car={car}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    )
}


export default CarsPageSkeleton