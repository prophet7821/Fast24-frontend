import CarsPageSkeleton from "@/components/CarPageSkeleton";
import {Metadata} from "next";
import React from "react";
import {Filter} from "@mui/icons-material";
import FilterModal from "@/components/FilterModal";


export const generateMetadata = async ({searchParams}: {
    searchParams: { [key: string]: string | string[] }
}): Promise<Metadata> => {
    return {
        title: searchParams['term'] ? `Search for ${searchParams.term} | Fast24` : 'Search | Fast24',
    }
}

const CarsPage = ({searchParams}: {
    searchParams: { [key: string]: string }
}) => {
    return (
        <>
            <CarsPageSkeleton searchParams={searchParams}/>
            <FilterModal/>
        </>

    )
}


export default CarsPage