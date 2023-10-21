import CarsPageSkeleton from "@/components/CarPageSkeleton";
import {Metadata} from "next";


export const generateMetadata = async ({searchParams}: {
    searchParams: { [key: string]: string | string[] }
}): Promise<Metadata> => {
    return {
        title: searchParams['term'] ? `Search for ${searchParams.term} | Fast24` : 'Search | Fast24',
    }
}

const CarsPage = ({searchParams}: {
    searchParams: { [key: string]: string | string[] }
}) => {
    return (
        <CarsPageSkeleton searchParams={searchParams}/>
    )
}


export default CarsPage